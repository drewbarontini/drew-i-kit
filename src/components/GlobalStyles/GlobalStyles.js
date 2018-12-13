import { createGlobalStyle } from 'styled-components';

import { palette, theme } from '../../lib/utils';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${palette('bg')};
    color: ${palette('fg')};
    font-family: ${theme('fonts.family.base')};
    font-size: ${theme('fonts.sizes.base')};
    line-height: ${theme('fonts.lineHeight.base')};
    margin: ${theme('spacing.l')};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    margin-bottom: ${theme('spacing.s')};
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

GlobalStyles.displayName = 'GlobalStyles';

export default GlobalStyles;
