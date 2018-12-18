import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import theme from '../../../config/theme';

import Select from '..';

describe('<Select />', () => {
  it('should render properly', () => {
    const { container } = render(
      <Select
        theme={theme}
        name="select"
        options={[
          { value: 'foo', label: 'Foo' },
          { value: 'bar', label: 'Bar' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('select');
    expect(container.firstChild).toHaveAttribute('id');
    expect(container.firstChild.id).toEqual('select');
    expect(container.firstChild).toHaveAttribute('name');
    expect(container.firstChild.name).toEqual('select');
    expect(container.firstChild.childNodes.length).toBe(3);
    expect(container.firstChild.childNodes[0]).toHaveTextContent(/select/i);
    expect(container.firstChild.childNodes[1]).toHaveTextContent(/foo/i);
    expect(container.firstChild.childNodes[2]).toHaveTextContent(/bar/i);
  });
});
