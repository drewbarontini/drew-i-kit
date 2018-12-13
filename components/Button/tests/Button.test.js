import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Button from '../';

describe('<Button />', () => {
  it('should render properly', () => {
    const { container } = render(<Button theme={theme}>My Button</Button>);
    const { container: container2 } = render(
      <Button primary theme={theme}>
        My Button
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'transparent'
    );
    expect(container.firstChild).toHaveStyleRule(
      'border',
      `2px solid ${theme.colors.fg}`
    );
    expect(container.firstChild).toHaveStyleRule('color', theme.colors.fg);
    expect(container2.firstChild).toMatchSnapshot();
    expect(container2.firstChild).toHaveStyleRule(
      'background-color',
      theme.colors.primary
    );
    expect(container2.firstChild).toHaveStyleRule(
      'border',
      '2px solid transparent'
    );
    expect(container2.firstChild).toHaveStyleRule('color', theme.colors.bg);
  });
});
