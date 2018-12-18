import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import theme from '../../../config/theme';

import Avatar from '..';

describe('<Avatar />', () => {
  it('should render properly', () => {
    const { container } = render(
      <Avatar
        themme={theme}
        src="IMG_SRC"
        alt="Alt Text"
        width="50"
        height="50"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveAttribute('height');
    expect(container.firstChild).toHaveAttribute('width');
  });
});
