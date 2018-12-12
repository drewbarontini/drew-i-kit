import get from 'lodash/get';
import { css } from 'styled-components';

export const hover = styles => css`
  &:active,
  &:focus,
  &:hover {
    ${styles}
  }
`;

export const theme = key => props => get(props.theme, key);
export const palette = key => props => get(props.theme.colors, key);

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

    return `${prop}: ${
      value
        ? get(props.theme, `${themeKey}.${value}`, value)
        : calculatedFallback
    };`;
  }

  if (!value && !calculatedFallback) return null;

  return `${prop}: ${value ? value : calculatedFallback};`;
};
