import React from 'react';
import { storiesOf } from '@storybook/react';

import icons from '../../config/icons';

import Flex from '../Flex';
import Icon from './';

storiesOf('Icon', module)
  .add('default', () => (
    <Flex>
      {icons.map((icon, index) => (
        <Icon name={icon.name} key={index} marginRight="s" />
      ))}
    </Flex>
  ))
  .add('size', () => (
    <Flex>
      {icons.map((icon, index) => (
        <Icon name={icon.name} key={index} marginRight="s" size="40" />
      ))}
    </Flex>
  ))
  .add('color', () => (
    <Flex>
      {icons.map((icon, index) => (
        <Icon
          name={icon.name}
          key={index}
          marginRight="s"
          size="40"
          color="primary"
        />
      ))}
    </Flex>
  ));
