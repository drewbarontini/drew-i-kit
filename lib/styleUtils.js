import get from 'lodash/get';
import { css } from 'styled-components';

import cssProps from '../config/cssProps';

// hover(`
//   font-weight: bold;
// `)
export const hover = styles => css`
  &:active,
  &:focus,
  &:hover {
    ${styles}
  }
`;

// intToStyleUnit(20) => '20px'
// intToStyleUnit(1, 'em') => '1em'
export const intToStyleUnit = (int, unit = 'px') => `${int}${unit}`;

// palette('white') => '#fff'
export const palette = key => props => get(props.theme.colors, key);

// styleUnitMath('20px', (n) => n * 2) => '40px'
export const styleUnitMath = (string, operation, unit = 'px') =>
  intToStyleUnit(operation(styleUnitToInt(string, unit)), unit);

// styleUnitToInt('20px') => 20
export const styleUnitToInt = (string, unit = 'px') =>
  parseInt(string.split(unit)[0], 10);

// setProp({ prop: 'height' })
// setProp({ prop: 'marginRight', themeKey: 'spacing' })
// setProp({ prop: 'size', cssProp: 'height', fallback: '100%' })
export const setProp = ({
  prop,
  cssProp = null,
  themeKey = null,
  fallback = null,
}) => props => {
  const value = props[prop];
  const calculatedFallback =
    fallback instanceof Function ? fallback(props) : fallback;

  if (cssProp && themeKey) {
    if (!value && !calculatedFallback) return null;

    return `${cssProp}: ${
      value
        ? get(props.theme, `${themeKey}.${value}`, value)
        : calculatedFallback
    };`;
  }

  if (cssProp && !themeKey) {
    if (!value && !calculatedFallback) return null;

    return `${cssProp}: ${value ? value : calculatedFallback};`;
  }

  if (!cssProp && themeKey) {
    if (!value && !calculatedFallback) return null;

    return `${get(cssProps, prop, prop)}: ${
      value
        ? get(props.theme, `${themeKey}.${value}`, value)
        : calculatedFallback
    };`;
  }

  if (!value && !calculatedFallback) return null;

  return `${get(cssProps, prop, prop)}: ${value ? value : calculatedFallback};`;
};

// theme('spacing.base') => '20px'
export const theme = key => props => get(props.theme, key);
