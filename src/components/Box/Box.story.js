import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '.';

storiesOf('Box', module).add('default', () => (
  <Box width="200px" height="200px" backgroundColor="primary.base" />
));
