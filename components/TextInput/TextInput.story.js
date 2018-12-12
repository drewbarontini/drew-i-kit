import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInput from './';

storiesOf('TextInput', module)
  .add('default', () => <TextInput />)
  .add('font size', () => <TextInput fontSize="l" />)
  .add('padding', () => <TextInput padding="base" />)
  .add('width', () => <TextInput width="200px" />);
