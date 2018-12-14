import React from 'react';
import { storiesOf } from '@storybook/react';

import Radio from '.';
import Flex, { FlexItem } from '../Flex';
import Text from '../Text';

storiesOf('Radio', module)
  .add('default', () => <Radio name="radio" />)
  .add('label', () => (
    <Flex alignItems="center">
      <FlexItem marginRight="xs">
        <Radio name="radio" />
      </FlexItem>
      <FlexItem>
        <Text as="label" htmlFor="radio" fontSize="s" fontWeight="bold">
          Label
        </Text>
      </FlexItem>
    </Flex>
  ));
