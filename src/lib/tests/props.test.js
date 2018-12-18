import { palette, setProp, theme } from '..';

const themeObject = {
  colors: {
    bg: '#fff',
    fg: '#222',
  },
  fonts: {
    family: {
      base: 'sans-serif',
    },
  },
  spacing: {
    base: '20px',
  },
};

describe('palette()', () => {
  it('should return the correct theme color variable', () => {
    expect(palette('bg')({ theme: themeObject })).toEqual('#fff');
    expect(palette('fg')({ theme: themeObject })).toEqual('#222');
  });
});

describe('setProp()', () => {
  it('should set the standard same-named prop', () => {
    expect(
      setProp({
        prop: 'height',
      })({ height: '200px' })
    ).toEqual('height: 200px;');
  });

  it('should set the correct CSS prop', () => {
    expect(
      setProp({
        prop: 'fontSize',
      })({ fontSize: '12px' })
    ).toEqual('font-size: 12px;');
  });

  it('should grab the theme value', () => {
    expect(
      setProp({
        prop: 'marginBottom',
        themeKey: 'spacing',
      })({ marginBottom: 'base', theme: themeObject })
    ).toEqual('margin-bottom: 20px;');
  });

  it('should set a fallback', () => {
    expect(
      setProp({
        prop: 'size',
        cssProp: 'height',
        fallback: '100px',
      })({})
    ).toEqual('height: 100px;');
    expect(
      setProp({
        prop: 'padding',
        fallback: props => theme('spacing.base')(props),
      })({ theme: themeObject })
    ).toEqual('padding: 20px;');
  });
});

describe('theme()', () => {
  it('should return the correct theme variable', () => {
    expect(theme('fonts.family.base')({ theme: themeObject })).toEqual(
      'sans-serif'
    );
    expect(theme('spacing.base')({ theme: themeObject })).toEqual('20px');
  });
});
