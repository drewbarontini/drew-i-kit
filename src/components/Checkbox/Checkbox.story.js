import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './';
import Flex, { FlexItem } from '../Flex';
import Text from '../Text';

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox name="checkbox" />)
  .add('label', () => (
    <Flex alignItems="center">
      <FlexItem marginRight="xs">
        <Checkbox name="checkbox" />
      </FlexItem>
      <FlexItem>
        <Text as="label" htmlFor="checkbox" fontSize="s" fontWeight="bold">
          Label
        </Text>
      </FlexItem>
    </Flex>
  ));
