import { css } from 'styled-components';
import get from 'lodash/get';
import capitalize from 'lodash/capitalize';

import cssProps from '../config/cssProps';

// palette('white') => '#fff'
export const palette = key => props => get(props.theme.colors, key);

// setProp({ prop: 'height' })
// setProp({ prop: 'marginRight', themeKey: 'spacing' })
// setProp({ prop: 'size', cssProp: 'height', fallback: '100%' })
export const setProp = ({
  prop,
  cssProp = null,
  themeKey = null,
  fallback = null,
}) => props => {
  const fnWithProps = key => (key instanceof Function ? key(props) : key);

  const calculatedProp = fnWithProps(prop);
  const calculatedCssProp = fnWithProps(cssProp);
  const calculatedThemeKey = fnWithProps(themeKey);
  const calculatedFallback = fnWithProps(fallback);

  const value = props[calculatedProp];

  if (calculatedCssProp && calculatedThemeKey) {
    if (!value && !calculatedFallback) return null;

    return `${calculatedCssProp}: ${
      value
        ? get(props.theme, `${calculatedThemeKey}.${value}`, value)
        : calculatedFallback
    };`;
  }

  if (calculatedCssProp && !calculatedThemeKey) {
    if (!value && !calculatedFallback) return null;

    return `${calculatedCssProp}: ${value || calculatedFallback};`;
  }

  if (!calculatedCssProp && calculatedThemeKey) {
    if (!value && !calculatedFallback) return null;

    return `${get(cssProps, calculatedProp, calculatedProp)}: ${
      value
        ? get(props.theme, `${calculatedThemeKey}.${value}`, value)
        : calculatedFallback
    };`;
  }

  if (!value && !calculatedFallback) return null;

  return `${get(cssProps, calculatedProp, calculatedProp)}: ${value ||
    calculatedFallback};`;
};

export const spacing = props => {
  const properties = ['margin', 'padding'];
  const directions = ['bottom', 'left', 'right', 'top'];
  const spacingProps = [];

  properties.map(property => {
    spacingProps.push(css`
      ${setProp({ prop: property, themeKey: 'spacing' })(props)};
    `);

    return directions.map(direction =>
      spacingProps.push(css`
        ${setProp({
          prop: `${property}${capitalize(direction)}`,
          themeKey: 'spacing',
        })(props)};
      `)
    );
  });

  return spacingProps
    .join('')
    .replace(/,/g, '')
    .replace(/;;/g, ';')
    .replace(/\n/g, '')
    .replace(/\s/g, '');
};

// theme('spacing.base') => '20px'
export const theme = key => props => get(props.theme, key);
