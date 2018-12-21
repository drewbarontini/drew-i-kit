import { css } from 'styled-components';
import get from 'lodash/get';

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

// spacing(props)
export const spacing = props => {
  const properties = [
    { prop: 'margin', themeKey: 'spacing' },
    { prop: 'marginBottom', themeKey: 'spacing' },
    { prop: 'marginLeft', themeKey: 'spacing' },
    { prop: 'marginRight', themeKey: 'spacing' },
    { prop: 'marginTop', themeKey: 'spacing' },
    { prop: 'padding', themeKey: 'spacing' },
    { prop: 'paddingBottom', themeKey: 'spacing' },
    { prop: 'paddingLeft', themeKey: 'spacing' },
    { prop: 'paddingRight', themeKey: 'spacing' },
    { prop: 'paddingTop', themeKey: 'spacing' },
  ];

  return setProps(properties)(props);
};

// const properties = [{ prop: 'margin', themeKey: 'spacing' }]
// setProps(properties)
export const setProps = properties => props => {
  const customProps = [];

  properties.map(property =>
    customProps.push(css`
      ${setProp({ prop: property.prop, themeKey: property.themeKey || null })(
        props
      )}
    `)
  );

  return customProps
    .join('')
    .replace(/,/g, '')
    .replace(/;;/g, ';')
    .replace(/\n/g, '')
    .replace(/\s/g, '');
};

// theme('spacing.base') => '20px'
export const theme = key => props => get(props.theme, key);

// typography(props)
export const typography = props => {
  const properties = [
    { prop: 'fontFamily', themeKey: 'fonts.families' },
    { prop: 'fontSize', themeKey: 'fonts.sizes' },
    { prop: 'fontStyle' },
    { prop: 'fontWeight', themeKey: 'fonts.weights' },
    { prop: 'letterSpacing' },
    { prop: 'lineHeight', themeKey: 'fonts.lineHeight' },
    { prop: 'textAlign' },
    { prop: 'textTransform' },
  ];

  return setProps(properties)(props);
};
