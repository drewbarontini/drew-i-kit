/* eslint-disable import/prefer-default-export */

import { css } from 'styled-components';

import { theme as defaultTheme } from '../../config';

const { breakpoints: sizes } = defaultTheme;

export const responsive = props => {
  const { breakpoints, theme } = props;
  const queries = [];

  if (breakpoints && Array.isArray(breakpoints)) {
    breakpoints.map(bp => {
      const size = sizes[bp.size] ? sizes[bp.size] : bp.size;

      return queries.push(css`
        @media screen and (max-width: ${size}px) {
          ${bp.styles(theme)};
        }
      `);
    });

    return queries.reverse();
  }

  return null;
};
