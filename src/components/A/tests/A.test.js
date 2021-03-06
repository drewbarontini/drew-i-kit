import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import theme from '../../../config/theme';

import A from '..';

describe('<A />', () => {
  it('should render properly', () => {
    const { container } = render(
      <A href="#0" theme={theme}>
        My Link
      </A>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('a');
    expect(container.firstChild).toHaveTextContent('My Link');
    expect(container.firstChild).toHaveAttribute('href');
    expect(container.firstChild).toHaveStyleRule(
      'color',
      theme.colors.primary.base
    );
    expect(container.firstChild).toHaveStyleRule('text-decoration', 'none');
  });
});
