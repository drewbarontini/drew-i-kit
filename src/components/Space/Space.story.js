import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Space from '.';

storiesOf('Space', module).add('default', () => (
  <Fragment>
    <Space bottom="s">
      <h1>Hello, Space!</h1>
    </Space>
    <Space bottom="base">
      <p>Here is some content.</p>
    </Space>
    <Space bottom="base">
      <p>Here is some more content.</p>
    </Space>
  </Fragment>
));
