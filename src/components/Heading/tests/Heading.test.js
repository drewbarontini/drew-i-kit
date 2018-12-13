import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Heading from '../';

describe('<Heading />', () => {
  it('should render properly', () => {
    const { container } = render(<Heading theme={theme}>My Heading</Heading>);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('h1');
    expect(container.firstChild).toHaveTextContent('My Heading');
    expect(container.firstChild).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.h1
    );
    expect(container.firstChild).toHaveStyleRule(
      'margin-bottom',
      theme.spacing.s
    );
  });
});
