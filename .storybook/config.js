import { configure, addDecorator } from '@storybook/react';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import { theme } from '../src/config';

import GlobalStyles from '../src/components/GlobalStyles';

const req = require.context('../src/components/', true, /.story.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

function withStyledComponents(story) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        {story()}
        <GlobalStyles />
      </Fragment>
    </ThemeProvider>
  );
}

addDecorator(withStyledComponents);
configure(loadStories, module);
