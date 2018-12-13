import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Card from '../';

describe('<Card />', () => {
  it('should render properly', () => {
    const { container } = render(<Card theme={theme}>My Card</Card>);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('div');
    expect(container.firstChild).toHaveTextContent('My Card');
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      theme.colors.white
    );
    expect(container.firstChild).toHaveStyleRule(
      'border-radius',
      theme.borders.radius.base
    );
  });
});
