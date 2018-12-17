import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Box from '..';

describe('<Box />', () => {
  it('should render properly', () => {
    const { container } = render(
      <Box backgroundColor="primary.base" padding="base" theme={theme}>
        My Box
      </Box>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('div');
    expect(container.firstChild).toHaveTextContent('My Box');
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      theme.colors.primary.base
    );
    expect(container.firstChild).toHaveStyleRule('padding', theme.spacing.base);
  });
});
