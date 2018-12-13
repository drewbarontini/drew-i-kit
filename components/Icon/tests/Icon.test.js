import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Icon from '../';

describe('<Icon />', () => {
  it('should render properly', () => {
    const { container, debug } = render(<Icon name="circle" theme={theme} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('fill', 'currentColor');
  });
});
