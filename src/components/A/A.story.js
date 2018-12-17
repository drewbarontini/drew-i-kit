import React from 'react';
import { storiesOf } from '@storybook/react';

import A from '.';

storiesOf('A', module)
  .add('default', () => <A href="#0">Link</A>)
  .add('color', () => (
    <A href="#0" color="neutral.base">
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
    <A href="#0" data-hover-color="neutral.base">
      Link
    </A>
  ))
  .add('responsive', () => (
    <A
      href="#0"
      breakpoints={[
        {
          size: 's',
          styles: theme => `color: ${theme.colors.accent.red.base};`,
        },
        {
          size: 'm',
          styles: theme => `color: ${theme.colors.accent.green.base};`,
        },
      ]}
    >
      Link
    </A>
  ));
