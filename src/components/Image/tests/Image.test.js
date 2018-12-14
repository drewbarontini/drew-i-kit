import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { theme } from '../../../config';

import Image from '..';

describe('<Image />', () => {
  it('should render a placeholder image initially', () => {
    const { getByTestId } = render(
      <Image src="https://placehold.it/50x50" alt="Placeholder" theme={theme} />
    );
    expect(getByTestId('image')).toHaveAttribute('src');
  });
});
