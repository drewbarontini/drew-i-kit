import React from 'react';
import { storiesOf } from '@storybook/react';

import UL from './';

storiesOf('UL', module)
  .add('default', () => (
    <UL>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </UL>
  ))
  .add('styled', () => (
    <UL styled>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </UL>
  ));
