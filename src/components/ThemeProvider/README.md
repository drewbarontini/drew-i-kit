# ThemeProvider

## Usage

```jsx
import { ThemeProvider } from 'drew-i-kit';

<ThemeProvider>
  <p>Your app here...</p>
</ThemeProvider>
```

```jsx
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider, defaultTheme, defaultGlobalStyles } from 'drew-i-kit';

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    bg: 'blue',
  },
};

const MyGlobalStyles = () => createGlobalStyle`
  ${defaultGlobalStyles}

  a {
    color: blue;
  }
`;

<ThemeProvider theme={theme}>
  <p>Your app here...</p>
</ThemeProvider>

<ThemeProvider GlobalStylesComponent={MyGlobalStyles}>
  <p>Your app here...</p>
</ThemeProvider>
```

## Props

- `children` (**JSX**)
- `GlobalStylesComponent` (**React Component**, optional)
- `theme` (**Object**, optional)