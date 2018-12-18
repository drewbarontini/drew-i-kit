import colors from './colors';
import icons from './icons';

const theme = {
  borders: {
    sizes: {
      base: '1px',
    },
    radius: {
      base: '3px',
    },
  },
  breakpoints: {
    sizes: {
      s: 380,
      m: 768,
      l: 900,
      xl: 1100,
    },
    query: 'max-width',
    unit: 'px',
  },
  colors: {
    ...colors,
  },
  fonts: {
    family: {
      base:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
      heading:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    },
    lineHeight: {
      base: '1.5',
      heading: '1.2',
    },
    sizes: {
      base: '14px',
      xxs: '8px',
      xs: '10px',
      s: '12px',
      l: '16px',
      xl: '24px',
      h1: '26px',
    },
    weights: {
      light: 200,
      normal: 400,
      semiBold: 600,
      bold: 800,
    },
  },
  icons: {
    ...icons,
  },
  shadows: {
    base: '0 3px 3px rgba(0, 0, 0, 0.25);',
  },
  sizing: {
    s: '400px',
    base: '900px',
    l: '1200px',
  },
  spacing: {
    base: '20px',
    xs: '5px',
    s: '10px',
    l: '40px',
    xl: '60px',
  },
  transition: {
    base: '0.3s ease-in-out',
  },
};

export default theme;
