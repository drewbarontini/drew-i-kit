# Flex

### Usage

```jsx
import { Flex, FlexItem } from 'drew-i-kit';

<Flex>
  <FlexItem>
    <p>Hello</p>
  </FlexItem>
  <FlexItem>
    <p>Flex</p>
  </FlexItem>
</Flex>
```

```jsx
import { Flex, FlexItem } from 'drew-i-kit';

<Flex>
  <FlexItem marginRight="base">
    <p>Hello</p>
  </FlexItem>
  <FlexItem>
    <p>Flex</p>
  </FlexItem>
</Flex>
```

### Props

#### `Flex`
- `alignItems` (**string**, optional)
- `center` (**string**, optional)
- `flex` (**string**, optional)
- `flexDirection` (**string**, optional)
- `flexWrap` (**string**, optional)
- `height` (**string**, optional)
- `justifyContent` (**string**, optional)

#### `FlexItem`
- `margin` (**string**, optional)
- `marginRight` (**string**, optional)
- `size` (**string**, optional)