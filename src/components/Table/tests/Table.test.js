import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Table from '../';

describe('<Table />', () => {
  it('should render properly', () => {
    const { container } = render(
      <Table
        theme={theme}
        headings={[{ key: 'foo', title: 'Foo' }, { key: 'bar', title: 'Bar' }]}
        data={[{ foo: 'Hello', bar: 'Table' }]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.tagName.toLowerCase()).toEqual('table');
    expect(container.firstChild.querySelectorAll('thead').length).toBe(1);
    expect(container.firstChild.querySelectorAll('tbody').length).toBe(1);
    expect(container.firstChild.querySelectorAll('th').length).toBe(2);
    expect(container.firstChild.querySelectorAll('td').length).toBe(2);
    expect(container.firstChild).toHaveStyleRule('border-collapse', 'collapse');
    expect(container.firstChild).toHaveStyleRule('width', '100%');
  });
});
