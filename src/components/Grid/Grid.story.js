import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '../Box';
import Flex from '../Flex';
import Grid, { GridItem } from '.';
import Text from '../Text';

storiesOf('Grid', module).add('default', () => (
  <Grid
    gap="base"
    columns="repeat(9, 1fr)"
    autoRows="minmax(100px, auto)"
    areas="
    'hd hd hd hd   hd   hd   hd   hd   hd'
    'sd sd sd mn   mn   mn   mn   mn   mn'
    'ft ft ft ft   ft   ft   ft   ft   ft'
  "
  >
    <GridItem area="hd">
      <Box height="100%" backgroundColor="primary.base" padding="base">
        <Flex center height="100%">
          <Text color="bg" fontWeight="bold" uppercase>
            Header
          </Text>
        </Flex>
      </Box>
    </GridItem>
    <GridItem area="sd">
      <Box height="100%" backgroundColor="primary.base" padding="base">
        <Flex center height="100%">
          <Text color="bg" fontWeight="bold" uppercase>
            Sidebar
          </Text>
        </Flex>
      </Box>
    </GridItem>
    <GridItem area="mn">
      <Box height="100%" backgroundColor="primary.base" padding="base">
        <Flex center height="100%">
          <Text color="bg" fontWeight="bold" uppercase>
            Main
          </Text>
        </Flex>
      </Box>
    </GridItem>
    <GridItem area="ft">
      <Box height="100%" backgroundColor="primary.base" padding="base">
        <Flex center height="100%">
          <Text color="bg" fontWeight="bold" uppercase>
            Footer
          </Text>
        </Flex>
      </Box>
    </GridItem>
  </Grid>
));
