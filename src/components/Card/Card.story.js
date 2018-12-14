import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '.';
import List from '../List';

storiesOf('Card', module)
  .add('default', () => (
    <Card>
      <List>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </List>
    </Card>
  ))
  .add('padding', () => (
    <Card padding="l">
      <List>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </List>
    </Card>
  ))
  .add('background color', () => (
    <Card padding="l" backgroundColor="black" color="white">
      <List>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </List>
    </Card>
  ))
  .add('flat', () => (
    <Card padding="l" backgroundColor="black" color="white" flat>
      <List>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </List>
    </Card>
  ))
  .add('square', () => (
    <Card padding="l" backgroundColor="black" color="white" flat square>
      <List>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </List>
    </Card>
  ));
