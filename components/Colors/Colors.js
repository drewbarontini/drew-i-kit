import React from 'react';

import { theme } from '../../config';

import Box from '../Box';
import Card from '../Card';
import Flex, { FlexItem } from '../Flex';
import Text from '../Text';
import { Object } from 'es6-shim';

const Colors = () => (
  <Flex flexWrap="wrap">
    {Object.keys(theme.colors).map((color, index) => (
      <FlexItem key={index} margin="xs">
        <Box
          height="200px"
          width="200px"
          backgroundColor={theme.colors[color]}
          border={theme.colors[color] === '#fff' ? 'subdued' : null}
        >
          <Flex center height="100%">
            <Card as="span" display="inline-block" padding="s">
              <Text fontSize="s" fontWeight="bold" textAlign="center" uppercase>
                {color}
              </Text>
            </Card>
          </Flex>
        </Box>
      </FlexItem>
    ))}
  </Flex>
);

Colors.displayName = 'Colors';

export default Colors;
