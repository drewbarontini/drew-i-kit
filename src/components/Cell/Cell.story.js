import React from 'react';
import { storiesOf } from '@storybook/react';

import Cell from './';
import Text from '../Text';

const content = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque
  egestas congue quisque egestas diam in. Massa tempor nec feugiat nisl
  pretium. Magnis dis parturient montes nascetur ridiculus mus. Nibh ipsum
  consequat nisl vel pretium lectus quam id leo. Ipsum nunc aliquet
  bibendum enim facilisis gravida neque convallis. Varius vel pharetra vel
  turpis nunc eget. Ut venenatis tellus in metus vulputate. Cras fermentum
  odio eu feugiat pretium nibh ipsum consequat nisl. Felis bibendum ut
  tristique et egestas quis. At consectetur lorem donec massa sapien
  faucibus et. Arcu non odio euismod lacinia at quis. Viverra vitae congue
  eu consequat ac felis donec et odio. Hac habitasse platea dictumst
  vestibulum rhoncus est pellentesque elit ullamcorper. Nisl vel pretium
  lectus quam id leo. Habitasse platea dictumst vestibulum rhoncus est
  pellentesque elit. Sit amet porttitor eget dolor morbi non. A diam
  sollicitudin tempor id eu nisl nunc mi. In nulla posuere sollicitudin
  aliquam ultrices.
`;

storiesOf('Cell', module)
  .add('default', () => (
    <Cell>
      <Text>{content}</Text>
    </Cell>
  ))
  .add('center', () => (
    <Cell center>
      <Text>{content}</Text>
    </Cell>
  ))
  .add('small', () => (
    <Cell size="s">
      <Text>{content}</Text>
    </Cell>
  ))
  .add('large', () => (
    <Cell size="l">
      <Text>{content}</Text>
    </Cell>
  ));
