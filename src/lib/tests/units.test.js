import { intToStyleUnit, styleUnitMath, styleUnitToInt } from '../units';

describe('intToStyleUnit()', () => {
  it('should convert a pixel string to an integer', () => {
    expect(intToStyleUnit(20)).toEqual('20px');
    expect(intToStyleUnit(2)).toEqual('2px');
    expect(intToStyleUnit(12, 'em')).toEqual('12em');
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
