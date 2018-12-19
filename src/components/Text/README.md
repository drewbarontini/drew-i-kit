# Text

### Usage

```jsx
import { Text } from 'drew-i-kit';

<Text>Some content here...</Text>
```

```jsx
import { Text } from 'drew-i-kit';

<Text fontSize="xl">Some content here...</Text>
<Text fontSize="xl" fontWeight="bold">Some content here...</Text>
<Text fontSize="xl" fontWeight="bold" uppercase>Some content here...</Text>
<Text
  fontSize="xl"
  fontWeight="bold"
  uppercase
  letterSpace="2px">
  Some content here...
</Text>
<Text
  fontSize="xl"
  fontWeight="bold"
  uppercase
  letterSpace="2px"
  color="primary.base">
  Some content here...
</Text>
<Text
  fontSize="xl"
  fontStyle="italic"
  fontWeight="bold"
  uppercase
  letterSpace="2px"
  color="primary.base">
  Some content here...
</Text>
```

### Props

- `color` (**string**, optional)
- `fontSize` (**string**, optional)
- `fontWeight` (**string**, optional)
- `letterSpacing` (**string**, optional)
- `lineHeight` (**string**, optional)
- `textAlign` (**string**, optional)
- `textTransform` (**string**, optional)
- `uppercase` (**Boolean**, optional)