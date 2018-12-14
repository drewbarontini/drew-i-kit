import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Radio from '..';

describe('<A />', () => {
  it('should render properly', () => {
    const { container } = render(<Radio name="radio" theme={theme} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('input');
    expect(container.firstChild).toHaveAttribute('id');
    expect(container.firstChild.id).toEqual('radio');
    expect(container.firstChild).toHaveAttribute('name');
    expect(container.firstChild.name).toEqual('radio');
    expect(container.firstChild).toHaveAttribute('type');
    expect(container.firstChild.type).toEqual('radio');
  });
});
