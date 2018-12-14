import { responsive } from '..';

describe('responsive()', () => {
  it('should return the correct breakpoints', () => {
    const props = {
      breakpointAt: 's',
      breakpointStyles: () => `color: blue;`,
    };
    const query = responsive(props).join('');
    expect(query).toContain('@media');
    expect(query).toContain('max-width');
    expect(query).toContain('color: blue;');
  });
});
