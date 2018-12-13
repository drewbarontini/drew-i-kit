import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import TextInput from '../';

describe('<TextInput />', () => {
  it('should render properly', () => {
    const { container } = render(<TextInput name="input" theme={theme} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName).toEqual('INPUT');
    expect(container.firstChild).toHaveAttribute('id');
    expect(container.firstChild.id).toEqual('input');
    expect(container.firstChild).toHaveAttribute('name');
    expect(container.firstChild.name).toEqual('input');
    expect(container.firstChild).toHaveAttribute('type');
    expect(container.firstChild.type).toEqual('text');
  });
});
