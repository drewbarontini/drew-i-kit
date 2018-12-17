import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '.';

storiesOf('Text', module)
  .add('default', () => <Text>Hello, Text!</Text>)
  .add('size', () => <Text fontSize="xl">Hello, Text</Text>)
  .add('weight', () => (
    <Text fontSize="xl" fontWeight="bold">
      Hello, Text
    </Text>
  ))
  .add('uppercase', () => (
    <Text fontSize="xl" fontWeight="bold" uppercase>
      Hello, Text
    </Text>
  ))
  .add('letter spacing', () => (
    <Text fontSize="xl" fontWeight="bold" uppercase letterSpacing="2px">
      Hello, Text
    </Text>
  ))
  .add('color', () => (
    <Text
      fontSize="xl"
      fontWeight="bold"
      uppercase
      letterSpacing="2px"
      color="primary.base"
    >
      Hello, Text
    </Text>
  ))
  .add('style', () => (
    <Text
      fontSize="xl"
      fontStyle="italic"
      fontWeight="bold"
      uppercase
      letterSpacing="2px"
      color="primary.base"
    >
      Hello, Text
    </Text>
  ));
