import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from './';

storiesOf('Select', module).add('default', () => (
  <Select
    name="select"
    options={[{ value: 'foo', label: 'Foo' }, { value: 'bar', label: 'Bar' }]}
  />
));
