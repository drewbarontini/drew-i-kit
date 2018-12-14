import React from 'react';
import { storiesOf } from '@storybook/react';

import A from '.';

storiesOf('A', module)
  .add('default', () => <A href="#0">Link</A>)
  .add('color', () => (
    <A href="#0" color="subdued">
      Link
    </A>
  ))
  .add('font size', () => (
    <A href="#0" fontSize="l">
      Link
    </A>
  ))
  .add('text decoration', () => (
    <A href="#0" textDecoration="underline">
      Link
    </A>
  ))
  .add('hover color', () => (
    <A href="#0" data-hover-color="subdued">
      Link
    </A>
  ))
  .add('responsive', () => (
    <A
      href="#0"
      breakpointAt="s"
      breakpointStyles={theme => `color: ${theme.colors.error};`}
    >
      Link
    </A>
  ));
