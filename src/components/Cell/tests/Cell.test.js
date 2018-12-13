import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Cell from '../';

describe('<Cell />', () => {
  it('should render properly', () => {
    const { container } = render(<Cell theme={theme}>My Cell</Cell>);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('div');
    expect(container.firstChild).toHaveTextContent('My Cell');
    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.sizing.base
    );
  });
});
