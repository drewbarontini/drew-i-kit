import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './';

storiesOf('List', module)
  .add('default', () => (
    <List>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </List>
  ))
  .add('styled', () => (
    <List type="disc">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </List>
  ))
  .add('numbered', () => (
    <List type="decimal">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </List>
  ));
