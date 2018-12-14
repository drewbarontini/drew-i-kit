import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Text from '..';

describe('<Text />', () => {
  it('should render properly', () => {
    const { container } = render(<Text theme={theme}>My Text</Text>);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('p');
    expect(container.firstChild).toHaveTextContent('My Text');
    expect(container.firstChild).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.base
    );
    expect(container.firstChild).toHaveTextContent('My Text');
  });
});
