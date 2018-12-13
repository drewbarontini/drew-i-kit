import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { theme, palette, hover } from '../../lib/utils';

const Button = styled.button`
  background-color: ${ifProp('primary', palette('primary'), 'transparent')};
  border: 0;
  border: 2px solid ${ifProp('primary', 'transparent', palette('fg'))};
  border-radius: ${theme('borders.radius.base')}
  color: ${ifProp('primary', palette('white'), palette('fg'))};
  cursor: pointer;
  display: inline-block;
  font-size: ${theme('fonts.sizes.xs')};
  font-weight: ${theme('fonts.weights.bold')};
  letter-spacing: 1px;
  line-height: 3;
  padding: 0 ${theme('spacing.base')};
  text-transform: uppercase;
  transition: ${theme('transition.base')};

  ${hover(css`
    background-color: ${ifProp('primary', palette('fg'), 'transparent')};
    border-color: ${ifProp('primary', 'transparent', palette('primary'))};
    color: ${ifProp('primary', palette('white'), palette('primary'))};
  `)}
`;

Button.propTypes = {
  primary: PropTypes.bool,
};

Button.displayName = 'Button';

export default Button;