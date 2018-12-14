import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from '.';

const standardProps = {
  src: 'https://source.unsplash.com/random/200x200',
  alt: 'Unsplash Image',
  width: '100',
  height: '100',
};

storiesOf('Avatar', module)
  .add('default', () => <Avatar {...standardProps} />)
  .add('rounded', () => <Avatar rounded {...standardProps} />)
  .add('raised', () => <Avatar raised {...standardProps} />)
  .add('rounded and raised', () => (
    <Avatar rounded raised {...standardProps} />
  ));
