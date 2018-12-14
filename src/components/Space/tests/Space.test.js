import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Space from '..';

describe('<Space />', () => {
  it('should render properly', () => {
    const { container } = render(
      <Space theme={theme} bottom="base">
        Hello, Space!
      </Space>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('div');
    expect(container.firstChild).toHaveTextContent('Hello, Space!');
    expect(container.firstChild).toHaveStyleRule(
      'margin-bottom',
      theme.spacing.base
    );
    expect(container.firstChild).toHaveTextContent('Hello, Space!');
  });
});
