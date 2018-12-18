import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, palette, setProp } from '../../../lib/props';
import { responsive } from '../../../lib/responsive';

const TextInput = styled.input`
  border: ${theme('borders.sizes.base')} solid ${palette('neutral.light[3]')};
  border-radius: ${theme('borders.radius.base')};

  ${setProp({
    prop: 'fontSize',
    themeKey: 'fonts.sizes',
    fallback: props => theme('fonts.sizes.base')(props),
  })};
  ${setProp({
    prop: 'padding',
    themeKey: 'spacing',
    fallback: props => theme('spacing.s')(props),
  })};
  ${setProp({ prop: 'width', fallback: '100%' })};

  &:focus {
    border-color: ${palette('primary.base')};
    outline: none;
  }

  ${responsive};
`;

TextInput.propTypes = {
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
};

TextInput.displayName = 'TextInput';

export default TextInput;
