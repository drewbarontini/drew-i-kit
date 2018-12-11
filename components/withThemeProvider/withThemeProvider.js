import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../config/theme';

export default function withThemeProvider(Component) {
  return function(props) {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );
  };
}
