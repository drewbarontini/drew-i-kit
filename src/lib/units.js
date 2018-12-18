// intToStyleUnit(20) => '20px'
// intToStyleUnit(1, 'em') => '1em'
export const intToStyleUnit = (int, unit = 'px') => `${int}${unit}`;

// styleUnitMath('20px', (n) => n * 2) => '40px'
export const styleUnitMath = (string, operation, unit = 'px') =>
  intToStyleUnit(operation(styleUnitToInt(string, unit)), unit);

// styleUnitToInt('20px') => 20
export const styleUnitToInt = (string, unit = 'px') =>
  parseInt(string.split(unit)[0], 10);
