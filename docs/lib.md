# lib

### `paletteFor`
The `paletteFor()` function will generate an object with the associated colors.

#### Parameters
- `area` (**string**): the name of the palette area (e.g. `primary`, `accent`)
- `base` (**string**): the base color
- `darker` (**Array**, optional): the array of dark colors off of base (lighter to darker)
- `lighter` (**Array**, optional): the array of light colors off of base (darker to lighter)

#### Examples
```javascript
  paletteFor({
    area: 'neutrals',
    base: '#444',
    darker: ['#333', '#222', '#111', '#000'],
    lighter: ['#555', '#666', '#777', '#888'],
  })
```

Which would output:

```javascript
{
  neutrals: {
    dark: ['#333', '#222', '#111', '#000'],
    base: '#444',
    light: ['#555', '#666', '#777', '#888'],
  }
}
```

This is then used in the `colors` configuration object to build palettes:

```javascript
const theme = {
  colors: {
    ...paletteFor({
      area: 'neutrals',
      base: '#444',
      darker: ['#333', '#222', '#111', '#000'],
      lighter: ['#555', '#666', '#777', '#888'],
    })
  },
  // ...
}
```

To generate:

```javascript
const theme = {
  colors: {
    neutrals: {
      dark: ['#333', '#222', '#111', '#000'],
      base: '#444',
      light: ['#555', '#666', '#777', '#888'],
    },
  },
  // ...
}
```

### `hover`
Use the `hover()` function to generate the appropriate CSS block within styled
components:

#### Parameters
- `styles` (**string**): the CSS styles to inject

#### Examples
```javascript
import styled, { css } from 'styled-components';

import { hover } from '.';

const Button = styled(Button)`
  color: blue;

  ${hover(css`
    color: yellow;
  `)}
`;
```

Which will output:

```css
color: blue;

&:active,
&:focus,
&:hover {
  color: yellow;
}
```

### `palette`
Use the `palette()` function to get the palette colors from the `theme` object:

#### Parameters
- `key` (**string**): the `theme` key
- `props` (**Object**, optional): the `props` object

#### Examples
```javascript
import styled, { css } from 'styled-components';

import { palette } from '.';

const Button = styled(Button)`
  color: ${palette('primary.base')};

  ${hover(css`
    color: ${palette('primary.light[2]')};
  `)}
`;
```

### `theme`
Use the `theme()` function to get the options from the `theme` object:

#### Parameters
- `key` (**string**): the `theme` key
- `props` (**Object**, optional): the `props` object

#### Examples
```javascript
import styled, { css } from 'styled-components';

import { theme } from '.';

const Button = styled(Button)`
  padding: 0 ${theme('spacing.base')};
`;
```

### `setProp`
Use the `setProp()` function to accept a specific prop within a styled component:

#### Parameters
- `prop` (**string**): the passed-in `prop`
- `cssProp` (**string**, optional): the CSS prop to map to
- `themeKey` (**string**, optional): the `theme` key to map to
- `fallback` (**string** | **Function**, optional): the default/fallback value

#### Examples
```javascript
import styled, { css } from 'styled-components';

import { setProp } from '.';

const Button = styled(Button)`
  ${setProp({ prop: 'height' })};
`;

// <Button height="75px" />
```

If the prop matches the native CSS prop, you don't need to pass `cssProp`. All
hyphenated CSS props are `camelCased` as JavaScript props. For example,
`background-color` would be `backgroundColor`. If, instead, you wanted the
passed-in prop to be `color` (mapping to `background-color`), you would then
pass the `cssProp` to `setProp()` like so:

```javascript
import styled, { css } from 'styled-components';

import { setProp } from '.';

const Button = styled(Button)`
  ${setProp({ prop: 'color', cssProp: 'background-color' })};
`;

// <Button color="blue" />
```

If you want to use your `theme` color variables, you can pass the `themeKey` to
map to that specific part of your `theme`:

```javascript
import styled, { css } from 'styled-components';

import { setProp } from '.';

const Button = styled(Button)`
  ${setProp({
    prop: 'color',
    cssProp: 'background-color',
    themeKey: 'colors',
  })};
`;

// <Button color="primary.base" />
```

And if you want a default fallback value when the prop is _not_ passed in:

```javascript
import styled, { css } from 'styled-components';

import { setProp, palette } from '.';

const Button = styled(Button)`
  ${setProp({
    prop: 'color',
    cssProp: 'background-color',
    themeKey: 'colors',
    fallback: props => palette('black')(props),
  })};
`;

// <Button color="primary.base" />
```

Since `setProp()` implicitly accepts the `props` from the styled component, the
`fallback` key (and any of the other keys in `setProp()`) can be a function that
will provide the `props` that can then be passed to `theme()` or `palette()`.

### `spacing`
`spacing()` will generate `setProp()` with the `theme.spacing` key for `margin`
and `padding`, as well as each side (e.g. `margin-left`, `padding-top`, etc.).

```javascript
import styled from 'styled-components';

import { spacing } from '.';

const Button = styled(Button)`
  ${spacing};
`;

// <Button padding="base" />
```

### `breakpoint`
`breakpoint()` pulls out the `theme.breakpoints.sizes` and creates a quick-access
variable to generate a media query in your styled component

#### Parameters
- `props` (**Object**): the `props` object
- `styles` (**string**): the CSS styles

#### Examples
```javascript
import styled, { css } from 'styled-components';

import { theme, breakpoint } from '.';

const Button = styled(Button)`
  padding: 0 ${theme('spacing.l')};

  ${props => breakpoint(props).s`
    padding: 0 ${theme('spacing.base')(props)};
  `};
`;
```

### `responsive`
`responsive()` is used within all components to automatically accept a
`breakpoints` prop that is passed an array of objects to specify the different
breakpoint and associated styles:

#### Examples
```html
<Card padding="base"
  breakpoints={[
    { size: 's', styles: theme => `padding: ${theme.spacing.s}`},
    { size: 'l', styles: theme => `padding: ${theme.spacing.l}`},
  ]}>
    <p>I'm a responsive Card!</p>
  </Card>
```

### `hideAndShow`

#### Examples
The `hideAndShow()` function is a helper for quickly generating a hide and show
effect at specific breakpoints:

```html
<Button
  breakpoints={hideAndShow({ hideAt: ['s'], showAt: ['l']})}>
  My Responsive Button
</Button>
```

This will hide the `Button` at the small (`s`) viewport size, and then show it
at the large (`l`) viewport size.