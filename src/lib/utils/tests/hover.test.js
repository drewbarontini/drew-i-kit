import { css } from 'styled-components';

import { hover } from '../hover';

const formatReturnedString = string =>
  string
    .join('')
    .replace(/\n/g, ' ')
    .replace(/\s/g, '')
    .trim();

describe('hover()', () => {
  it('should return the correct CSS declaration', () => {
    expect(
      formatReturnedString(
        hover(
          css`
            color: blue;
          `
        )
      )
    ).toContain(`&:active,&:focus,&:hover{color:blue;}`);
  });
});
