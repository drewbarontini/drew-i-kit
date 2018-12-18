import { createGlobalStyle } from 'styled-components';

import globalStyles from '../../config/globalStyles';

const GlobalStyles = createGlobalStyle`
  ${globalStyles};
`;

GlobalStyles.displayName = 'GlobalStyles';

export default GlobalStyles;
