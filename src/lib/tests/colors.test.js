import { paletteFor } from '../colors';

describe('paletteFor()', () => {
  it('should generate the palette', () => {
    expect(
      paletteFor({
        area: 'neutrals',
        base: '#444',
        darker: ['#333', '#222', '#111', '#000'],
        lighter: ['#555', '#666', '#777', '#888'],
      })
    ).toEqual({
      neutrals: {
        dark: ['#333', '#222', '#111', '#000'],
        base: '#444',
        light: ['#555', '#666', '#777', '#888'],
      },
    });
  });
});
