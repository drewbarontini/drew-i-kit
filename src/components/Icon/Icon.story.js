import React from 'react';
import { storiesOf } from '@storybook/react';

import { icons } from '../../config';

import Flex from '../Flex';
import Icon from '.';

storiesOf('Icon', module)
  .add('default', () => (
    <Flex>
      {Object.keys(icons).map((icon, index) => (
        <Icon name={icon} key={index} marginRight="s" />
      ))}
    </Flex>
  ))
  .add('size', () => (
    <Flex>
      {Object.keys(icons).map((icon, index) => (
        <Icon name={icon} key={index} marginRight="s" size="40" />
      ))}
    </Flex>
  ))
  .add('color', () => (
    <Flex>
      {Object.keys(icons).map((icon, index) => (
        <Icon
          name={icon}
          key={index}
          marginRight="s"
          size="40"
          color="primary.base"
        />
      ))}
    </Flex>
  ));
