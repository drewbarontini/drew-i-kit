# Avatar

## Usage

```jsx
import { Avatar } from 'drew-i-kit';

const standardProps = {
  src: 'https://source.unsplash.com/random/200x200',
  alt: 'Unsplash Image',
  width: '100',
  height: '100',
};

<Avatar {...standardProps} />
```

```jsx
import { Avatar } from 'drew-i-kit';

<Avatar rounded {...standardProps} />
<Avatar raised {...standardProps} />
<Avatar rounded raised {...standardProps} />
```

## Props

- `alt` (**string**)
- `height` (**string**, optional)
- `raised` (**Boolean**, optional)
- `rounded` (**Boolean**, optional)
- `src` (**string**)
- `width` (**string**, optional)