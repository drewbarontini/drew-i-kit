/* eslint-disable import/prefer-default-export */

import { css } from 'styled-components';

import { theme as defaultTheme } from '../../config';

const { breakpoints: sizes } = defaultTheme;

export const breakpoint = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;

  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {});

export const responsive = props => {
  const { breakpointStyles, breakpointAt, theme } = props;

  if (breakpointStyles && breakpointAt) {
    return css`
      ${breakpoint[breakpointAt]`${breakpointStyles(theme)}`}
    `;
  }

  return null;
};
