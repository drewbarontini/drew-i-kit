import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Grid, { GridItem } from '../';

describe('<A />', () => {
  it('should render properly', () => {
    const { container } = render(
      <Grid theme={theme}>
        <GridItem>Hello</GridItem>
        <GridItem>Grid</GridItem>
      </Grid>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'grid');
  });
});