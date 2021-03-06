import React from 'react';
import { storiesOf } from '@storybook/react';

import Divider from '.';

storiesOf('Divider', module)
  .add('default', () => <Divider />)
  .add('vertical', () => <Divider vertical height="50px" />)
  .add('size', () => <Divider size="4px" />)
  .add('color', () => <Divider size="4px" color="primary.base" />)
  .add('width', () => <Divider size="4px" color="primary.base" width="50px" />);
