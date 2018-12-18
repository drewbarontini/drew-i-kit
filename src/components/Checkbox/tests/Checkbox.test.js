import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import theme from '../../../config/theme';

import Checkbox from '..';

describe('<Checkbox />', () => {
  it('should render properly', () => {
    const { container } = render(<Checkbox theme={theme} name="checkbox" />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('input');
    expect(container.firstChild).toHaveAttribute('id');
    expect(container.firstChild.id).toEqual('checkbox');
    expect(container.firstChild).toHaveAttribute('name');
    expect(container.firstChild.name).toEqual('checkbox');
    expect(container.firstChild).toHaveAttribute('type');
    expect(container.firstChild.type).toEqual('checkbox');
  });
});
