/* eslint-disable import/prefer-default-export */

import { css } from 'styled-components';

import { styleUnitToInt } from '..';

const getUnitSize = (unit, breakpointSize, baseFontSize) =>
  unit === 'em'
    ? styleUnitToInt(breakpointSize, unit) / styleUnitToInt(baseFontSize, unit)
    : breakpointSize;

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

export const responsive = props => {
  const { breakpoints, theme } = props;
  const { sizes, unit, query } = theme.breakpoints;
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
