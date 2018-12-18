# Table

## Usage

```jsx
import { Table } from 'drew-i-kit';

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
```

## Props

- `headings` (**Array**)
- `data` (**Array**)