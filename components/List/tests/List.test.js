import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import List from '../';

describe('<List />', () => {
  it('should render properly', () => {
    const { container, queryAllByTestId } = render(
      <List theme={theme}>
        <li data-testid="li">One</li>
        <li data-testid="li">Two</li>
        <li data-testid="li">Three</li>
      </List>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(queryAllByTestId('li')).toHaveLength(3);
  });
});
