import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, palette, setProp } from '../../lib/styleUtils';

const TextInput = styled.input`
  border: ${theme('borders.sizes.base')} solid ${palette('subdued')};
  border-radius: ${theme('borders.radius.base')};

  ${setProp({
    prop: 'fontSize',
    cssProp: 'font-size',
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
    border-color: ${palette('primary')};
    outline: none;
  }
`;

TextInput.propTypes = {
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
};

TextInput.displayName = 'TextInput';

export default TextInput;
