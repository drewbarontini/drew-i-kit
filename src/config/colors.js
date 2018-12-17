import { paletteFor } from '../lib';

const colors = {
  ...paletteFor({
    area: 'primary',
    base: '#3576a7',
    darker: ['#152f43', '#1d415c', '#255375', '#2d648e'],
    lighter: ['#538bb4', '#729fc1', '#90B4cf', '#aeC8dc'],
  }),
  ...paletteFor({
    area: 'neutral',
    base: '#737373',
    darker: ['#0b0b0b', '#1d1d1d', '#2e2e2e', '#3f3f3f', '#515151', '#626262'],
    lighter: ['#888888', '#9d9d9d', '#b2b2b2', '#c7c7c7', '#dcdcdc', '#f1f1f1'],
  }),
  accent: {
    ...paletteFor({
      area: 'green',
      base: '#8acb88',
      darker: ['#233322', '#375136', '#4c704b', '#618e5f', '#75ad74'],
      lighter: ['#9cd39a', '#addbac', '#bfe2be', '#d0eacf', '#e2f2e1'],
    }),
    ...paletteFor({
      area: 'yellow',
      base: '#ffc527',
      darker: ['#40310a', '#664f10', '#8c6c15', '#b38a1b', '#d9a721'],
      lighter: ['#ffce47', '#ffd668', '#ffdf88', '#ffe8a9', '#fff1c9'],
    }),
    ...paletteFor({
      area: 'red',
      base: '#fe5f55',
      darker: ['#401815', '#662622', '#8c342f', '#b2433b', '#d85148'],
      lighter: ['#fe776f', '#fe8f88', '#fea7a2', '#ffbfbb', '#ffd7d5'],
    }),
  },
  bg: '#fff',
  fg: '#272727',
  white: '#fff',
  black: '#272727',
  border: '#dcdcdc',
};

export default colors;
