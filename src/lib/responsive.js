/* eslint-disable import/prefer-default-export */

import { css } from 'styled-components';

import { styleUnitToInt } from './units';

// breakpoints={hideAndShow({ hideAt: ['s'] })};
export const hideAndShow = ({ hideAt, showAt }) => {
  const queries = [];

  hideAt &&
    hideAt.map(size => {
      const query = {
        size,
        styles: () => `display: none;`,
      };

      return queries.push(query);
    });

  showAt &&
    showAt.map(size => {
      const query = {
        size,
        styles: () => `display: block;`,
      };

      return queries.push(query);
    });

  return queries.reverse();
};

// ${props => breakpoint(props).s`color: blue;`};
export const breakpoint = props => {
  const { theme } = props;
  const { sizes, unit, query } = theme.breakpoints;

  return Object.keys(sizes).reduce((accumulator, size) => {
    const unitSize = getUnitSize(unit, sizes[size], theme.fonts.sizes.base);

    accumulator[size] = (...args) => css`
      @media (${query}: ${unitSize}${unit}) {
        ${css(...args)};
      }
    `;

    return accumulator;
  }, {});
};

// ${responsive};
export const responsive = props => {
  const { breakpoints, theme } = props;
  const { sizes, unit, query } = theme.breakpoints || {};
  const queries = [];

  if (breakpoints && Array.isArray(breakpoints)) {
    breakpoints.map(bp => {
      const size = sizes[bp.size] ? sizes[bp.size] : bp.size;
      const unitSize = getUnitSize(unit, size, theme.fonts.sizes.base);
      const updatedUnitSize = unitSize.toString().split(unit)
        ? unitSize.toString().split(unit)[0]
        : unitSize;

      return queries.push(css`
        @media screen and (${query}: ${updatedUnitSize}${unit}) {
          ${bp.styles(theme)};
        }
      `);
    });

    return queries.reverse();
  }

  return null;
};

// getUnitSize('px', 600, '16px); => '600px'
const getUnitSize = (unit, breakpointSize, baseFontSize) =>
  unit === 'em'
    ? styleUnitToInt(breakpointSize.toString(), unit) /
      styleUnitToInt(baseFontSize, unit)
    : breakpointSize;
