import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './';

storiesOf('Table', module).add('default', () => (
  <Table
    headings={[
      { key: 'id', title: 'ID' },
      { key: 'firstName', title: 'First Name' },
      { key: 'lastName', title: 'Last Name' },
      { key: 'company', title: 'Company' },
    ]}
    data={[
      {
        id: '1',
        firstName: 'Drew',
        lastName: 'Barontini',
        company: 'Differential',
      },
    ]}
  />
));
