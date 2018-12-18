# Select

### Usage

```jsx
import { Select } from 'drew-i-kit';

<Select
  name="select"
  options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]}
/>
```

```jsx
import { Select } from 'drew-i-kit';

<Select
  name="select"
  options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]}
  placeholder="Select an option..."
/>
```

### Props

- `name` (**string**)
- `options` (**Object**)
- `placeholder` (**string**, optional)

_Also includes all default props for `<select>` elements._