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
  ));
