import {
  intToStyleUnit,
  palette,
  setProp,
  styleUnitMath,
  styleUnitToInt,
  theme,
} from '../styleUtils';

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

describe('intToStyleUnit()', () => {
  it('should convert a pixel string to an integer', () => {
    expect(intToStyleUnit(20)).toEqual('20px');
    expect(intToStyleUnit(2)).toEqual('2px');
    expect(intToStyleUnit(12, 'em')).toEqual('12em');
  });
});

describe('palette()', () => {
  it('should return the correct theme color variable', () => {
    expect(palette('bg')({ theme: themeObject })).toEqual('#fff');
    expect(palette('fg')({ theme: themeObject })).toEqual('#222');
  });
});

describe('styleUnitMath()', () => {
  it('should convert a pixel string to an integer', () => {
    expect(styleUnitMath('20px', n => n * 2)).toEqual('40px');
  });
});

describe('styleUnitToInt()', () => {
  it('should convert a pixel string to an integer', () => {
    expect(styleUnitToInt('20px')).toEqual(20);
    expect(styleUnitToInt('2px')).toEqual(2);
    expect(styleUnitToInt('12em')).toEqual(12);
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
