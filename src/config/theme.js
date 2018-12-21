import colors from './colors';
import fonts from './fonts';
import icons from './icons';

const theme = {
  borders: {
    sizes: {
      base: '1px',
      l: '2px',
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
    ...fonts,
  },
  icons: {
    ...icons,
  },
  shadows: {
    base: '0 3px 3px rgba(0, 0, 0, 0.25);',
  },
  sizing: {
    base: '900px',
    s: '400px',
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
