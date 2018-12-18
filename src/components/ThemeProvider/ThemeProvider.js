/* eslint-disable react/forbid-prop-types */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import defaultTheme from '../../config/theme';
import GlobalStyles from '../GlobalStyles';

const ThemeProvider = ({
  children,
  theme = defaultTheme,
  GlobalStylesComponent = GlobalStyles,
}) => (
  <SCThemeProvider theme={theme}>
    <Fragment>
      {children}
      <GlobalStylesComponent />
    </Fragment>
  </SCThemeProvider>
);

ThemeProvider.displayName = 'ThemeProvider';

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  GlobalStylesComponent: PropTypes.any,
  theme: PropTypes.object,
};

ThemeProvider.defaultProps = {
  GlobalStylesComponent: GlobalStyles,
  theme: defaultTheme,
};

export default ThemeProvider;
