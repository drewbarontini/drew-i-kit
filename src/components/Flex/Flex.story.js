import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '../Box';
import Flex, { FlexItem } from '.';

storiesOf('Flex', module).add('default', () => (
  <Flex>
    <FlexItem marginRight="base">
      <Box width="200px" height="200px" backgroundColor="primary" />
    </FlexItem>
    <FlexItem>
      <Box width="200px" height="200px" backgroundColor="primary" />
    </FlexItem>
  </Flex>
));
