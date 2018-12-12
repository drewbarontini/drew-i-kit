import { configure, addDecorator } from '@storybook/react';
import React, { Fragment } from 'react';
import 'normalize.css';

import GlobalStyles from '../components/GlobalStyles';

function withGlobalStyles(storyFn) {
  return (
    <Fragment>
      <GlobalStyles />
      {storyFn()}
    </Fragment>
  );
}

const req = require.context('../components/', true, /.story.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
addDecorator(withGlobalStyles);
