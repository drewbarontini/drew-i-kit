import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../config/theme';
import GlobalStyles from '../GlobalStyles';

export default function withStyledComponents(Component) {
  return function(props) {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Component {...props} />
          <GlobalStyles />
        </Fragment>
      </ThemeProvider>
    );
  };
}
