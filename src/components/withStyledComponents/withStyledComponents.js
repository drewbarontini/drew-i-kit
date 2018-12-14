import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../config';
import GlobalStyles from '../GlobalStyles';

export default function withStyledComponents(Component) {
  return function fn(props) {
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
