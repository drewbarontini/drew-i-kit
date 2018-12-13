import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from './';

storiesOf('Image', module).add('default', () => (
  <Image
    src="https://source.unsplash.com/random/2000x2000"
    alt="Unsplash Image"
    width="200"
    height="200"
  />
));
