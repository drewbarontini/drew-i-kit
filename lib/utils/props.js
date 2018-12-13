import get from 'lodash/get';

import cssProps from '../../config/cssProps';

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
