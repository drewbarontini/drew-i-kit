import React from 'react';
import { storiesOf } from '@storybook/react';

import Heading from '.';

storiesOf('Heading', module)
  .add('default', () => <Heading>Hello, Heading!</Heading>)
  .add('flush', () => <Heading flush>Hello, Heading!</Heading>)
  .add('level', () => (
    <Heading as="h2" fontSize="l">
      Hello, Heading!
    </Heading>
  ));
