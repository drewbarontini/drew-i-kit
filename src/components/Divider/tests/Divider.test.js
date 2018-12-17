import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Divider from '..';

describe('<Divider />', () => {
  it('should render properly', () => {
    const { container } = render(<Divider theme={theme} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('div');
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      theme.colors.border
    );
    expect(container.firstChild).toHaveStyleRule('height', '1px');
    expect(container.firstChild).toHaveStyleRule('width', '100%');
  });
});
