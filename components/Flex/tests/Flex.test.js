import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Flex, { FlexItem } from '../';

describe('<Flex />', () => {
  it('should render properly', () => {
    const { container } = render(
      <Flex theme={theme}>
        <FlexItem>Hello</FlexItem>
        <FlexItem>Flex</FlexItem>
      </Flex>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
  });
});
