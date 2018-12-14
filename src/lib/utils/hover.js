/* eslint-disable import/prefer-default-export */

import { css } from 'styled-components';

// hover(`
//   font-weight: bold;
// `)
const hover = styles => css`
  &:active,
  &:focus,
  &:hover {
    ${styles}
  }
`;

export default hover;
