import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '.';

storiesOf('Button', module)
  .add('default', () => <Button>Default Button</Button>)
  .add('primary', () => <Button primary>Primary Button</Button>)
  .add('customized', () => (
    <Button
      primary
      textTransform="none"
      borderRadius="20px"
      letterSpacing="0"
      backgroundColorHover="neutral.light[4]"
      colorHover="black"
    >
      Primary Button
    </Button>
  ));
