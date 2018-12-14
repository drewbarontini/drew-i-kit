import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../config';
import GlobalStyles from '../GlobalStyles';

export default function withStyledComponents({
  component: Component,
  themeObject = theme,
  globalStyles: GlobalStylesComponent = GlobalStyles,
}) {
  return function fn(props) {
    return (
      <ThemeProvider theme={themeObject}>
        <Fragment>
          <Component {...props} />
          <GlobalStylesComponent />
        </Fragment>
      </ThemeProvider>
    );
  };
}
