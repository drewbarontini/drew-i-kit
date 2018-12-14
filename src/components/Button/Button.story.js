import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '.';

storiesOf('Button', module)
  .add('default', () => <Button>Default Button</Button>)
  .add('primary', () => <Button primary>Primary Button</Button>);
