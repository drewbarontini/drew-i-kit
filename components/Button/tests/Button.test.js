import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Button from '../';

describe('<Button />', () => {
  it('should render properly', () => {
    const { container } = render(<Button theme={theme}>My Button</Button>);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('button');
    expect(container.firstChild).toHaveTextContent('My Button');
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'transparent'
    );
    expect(container.firstChild).toHaveStyleRule(
      'border',
      `2px solid ${theme.colors.fg}`
    );
    expect(container.firstChild).toHaveStyleRule('color', theme.colors.fg);
  });
});
