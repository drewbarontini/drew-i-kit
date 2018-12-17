import { responsive, breakpoint } from '..';

const cleanupMediaQuery = array =>
  array
    .join('')
    .replace(/,/g, '')
    .replace(/;;/g, ';');

describe('responsive()', () => {
  it('should return the correct breakpoints', () => {
    const props = {
      theme: {
        breakpoints: {
          sizes: {
            s: 300,
            l: 800,
          },
          query: 'max-width',
          unit: 'px',
        },
        fonts: { sizes: { base: '16px' } },
      },
      breakpoints: [
        { size: 's', styles: () => `color: red;` },
        { size: '600px', styles: () => `color: blue;` },
        { size: 'l', styles: () => `color: green;` },
      ],
    };
    const query = cleanupMediaQuery(responsive(props));
    expect(query).toContain('@media');
    expect(query).toContain('max-width');
    expect(query).toContain('300px');
    expect(query).toContain('600px');
    expect(query).toContain('800px');
    expect(query).toContain('color: red;');
    expect(query).toContain('color: green;');
    expect(query).toContain('color: blue;');
  });

  it('should return em-based breakpoints', () => {});
});

describe('breakpoint()', () => {
  it('should return the correct breakpoint', () => {
    const props = {
      theme: {
        breakpoints: {
          sizes: {
            s: 300,
            l: 800,
          },
          query: 'max-width',
          unit: 'px',
        },
        fonts: { sizes: { base: '16px' } },
      },
    };
    const query = cleanupMediaQuery(breakpoint(props).s`color: blue;`);
    expect(query).toContain('@media');
    expect(query).toContain('max-width');
    expect(query).toContain('300px');
    expect(query).toContain('color: blue;');
  });
});
