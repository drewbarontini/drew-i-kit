# Card

### Usage

```jsx
import { Card } from 'drew-i-kit';

<Card>
  <p>Some content here...</p>
</Card>
```

```jsx
import { Card } from 'drew-i-kit';

<Card padding="l">
  <p>Some content here...</p>
</Card>
<Card padding="l" backgroundColor="black" color="white">
  <p>Some content here...</p>
</Card>
<Card padding="l" backgroundColor="black" color="white" flat>
  <p>Some content here...</p>
</Card>
<Card padding="l" backgroundColor="black" color="white" flat square>
  <p>Some content here...</p>
</Card>
```

### Props

- `backgroundColor` (**string**, optional)
- `color` (**string**, optional)
- `flat` (**Boolean**, optional)
- `overflow` (**string**, optional)
- `padding` (**string**, optional)
- `radius` (**string**, optional)
- `shadow` (**string**, optional)
- `square` (**Boolean**, optional)