import { css } from 'styled-components';

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
