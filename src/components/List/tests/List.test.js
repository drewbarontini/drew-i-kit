import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import theme from '../../../config/theme';

import List from '..';

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
    expect(container.firstChild.tagName.toLowerCase()).toEqual('ul');
    expect(container.firstChild.childNodes.length).toBe(3);
    expect(container.firstChild.childNodes[0]).toHaveTextContent(/one/i);
    expect(container.firstChild.childNodes[1]).toHaveTextContent(/two/i);
    expect(container.firstChild.childNodes[2]).toHaveTextContent(/three/i);
  });
});
