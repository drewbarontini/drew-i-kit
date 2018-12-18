import React, { Fragment } from 'react';

import theme from '../../config/theme';

import Box from '../Box';
import Flex, { FlexItem } from '../Flex';
import Heading from '../Heading';
import Space from '../Space';

const BOX_SIZE = '75px';

const colors = (color, index) => (
  <FlexItem key={index}>
    <Box
      height={BOX_SIZE}
      width={BOX_SIZE}
      backgroundColor={color}
      border={color === '#fff' ? 'subdued' : null}
    />
  </FlexItem>
);

const Colors = () => (
  <Fragment>
    <Space bottom="base">
      <Heading as="h2">Primary</Heading>
      <Flex flexWrap="wrap">
        {theme.colors.primary.light
          .reverse()
          .map((color, index) => colors(color, index))}
        {colors(theme.colors.primary.base, '00')}
        {theme.colors.primary.dark
          .reverse()
          .map((color, index) => colors(color, index))}
      </Flex>
    </Space>
    <Space bottom="base">
      <Heading as="h2">Neutral</Heading>
      <Flex flexWrap="wrap">
        {theme.colors.neutral.light
          .reverse()
          .map((color, index) => colors(color, index))}
        {colors(theme.colors.neutral.base, '00')}
        {theme.colors.neutral.dark
          .reverse()
          .map((color, index) => colors(color, index))}
      </Flex>
    </Space>
    <Space bottom="base">
      <Heading as="h2">Accent</Heading>
      <Space bottom="xs">
        <Flex flexWrap="wrap">
          {theme.colors.accent.green.light
            .reverse()
            .map((color, index) => colors(color, index))}
          {colors(theme.colors.accent.green.base, '00')}
          {theme.colors.accent.green.dark
            .reverse()
            .map((color, index) => colors(color, index))}
        </Flex>
      </Space>
      <Space bottom="xs">
        <Flex flexWrap="wrap">
          {theme.colors.accent.yellow.light
            .reverse()
            .map((color, index) => colors(color, index))}
          {colors(theme.colors.accent.yellow.base, '00')}
          {theme.colors.accent.yellow.dark
            .reverse()
            .map((color, index) => colors(color, index))}
        </Flex>
      </Space>
      <Space bottom="xs">
        <Flex flexWrap="wrap">
          {theme.colors.accent.red.light
            .reverse()
            .map((color, index) => colors(color, index))}
          {colors(theme.colors.accent.red.base, '00')}
          {theme.colors.accent.red.dark
            .reverse()
            .map((color, index) => colors(color, index))}
        </Flex>
      </Space>
    </Space>
  </Fragment>
);

Colors.displayName = 'Colors';

export default Colors;
