import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import List from '../';

describe('<List />', () => {
  it('should render properly', () => {
    const { container } = render(
      <List theme={theme}>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </List>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.childNodes.length).toBe(3);
  });
});
