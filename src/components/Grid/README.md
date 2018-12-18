# Grid

### Usage

```jsx
import { Grid, GridItem } from 'drew-i-kit';

<Grid>
  <GridItem>
    <p>Hello</p>
  </GridItem>
  <GridItem>
    <p>Grid</p>
  </GridItem>
</Grid>
```

```jsx
import { A } from 'drew-i-kit';

<Grid
  gap="base"
  columns="repeat(9, 1fr)"
  autoRows="minmax(100px, auto)"
  areas="
  'hd hd hd hd   hd   hd   hd   hd   hd'
  'sd sd sd mn   mn   mn   mn   mn   mn'
  'ft ft ft ft   ft   ft   ft   ft   ft'
"
>
  <GridItem area="hd">
    <p>Header</p>
  </GridItem>
  <GridItem area="sd">
    <p>Sidebar</p>
  </GridItem>
  <GridItem area="mn">
    <p>Main</p>
  </GridItem>
  <GridItem area="ft">
    <p>Footer</p>
  </GridItem>
</Grid>
```

### Props

#### `Grid`
- `alignContent` (**string**, optional)
- `alignItems` (**string**, optional)
- `autoColumns` (**string**, optional)
- `autoFlow` (**string**, optional)
- `autoRows` (**string**, optional)
- `areas` (**string**, optional)
- `columns` (**string**, optional)
- `columnGap` (**string**, optional)
- `gap` (**string**, optional)
- `grid` (**string**, optional)
- `justifyContent` (**string**, optional)
- `placeContent` (**string**, optional)
- `placeItems` (**string**, optional)
- `rows` (**string**, optional)
- `rowGap` (**string**, optional)
- `template` (**string**, optional)

#### `GridItem`
- `alignSelf` (**string**, optional)
- `area` (**string**, optional)
- `column` (**string**, optional)
- `columnEnd` (**string**, optional)
- `columnStart` (**string**, optional)
- `justifySelf` (**string**, optional)
- `placeSelf` (**string**, optional)
- `row` (**string**, optional)
- `rowEnd` (**string**, optional)
- `rowStart` (**string**, optional)
