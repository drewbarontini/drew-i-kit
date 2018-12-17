/* eslint-disable import/prefer-default-export */

// paletteFor({
//   area: 'primary',
//   base: '#3576a7',
//   darker: ['#000', '#000', '#000', '#000'];
//   lighter: ['#000', '#000', '#000', '#000'];
// });
export const paletteFor = ({ area, base, darker, lighter }) => {
  const object = {};
  object[area] = {};
  object[area].base = base;

  if (darker) {
    object[area].dark = [];
    darker.map((color, index) => object[area].dark.push(color));
  }

  if (lighter) {
    object[area].light = [];
    lighter.map((color, index) => object[area].light.push(color));
  }

  return object;
};
