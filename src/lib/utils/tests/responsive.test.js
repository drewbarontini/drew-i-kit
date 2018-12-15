import { responsive } from '..';

describe('responsive()', () => {
  it('should return the correct breakpoints', () => {
    const props = {
      breakpoints: [
        { size: 's', styles: () => `color: red;` },
        { size: 'l', styles: () => `color: green;` },
        { size: '600px', styles: () => `color: blue;` },
      ],
    };
    const query = responsive(props).join('');
    expect(query).toContain('@media');
    expect(query).toContain('max-width');
    expect(query).toContain('600px');
    expect(query).toContain('color: red;');
    expect(query).toContain('color: green;');
    expect(query).toContain('color: blue;');
  });
});
