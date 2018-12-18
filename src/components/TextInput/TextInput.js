import React from 'react';
import PropTypes from 'prop-types';

import StyledTextInput from './styled/TextInput';

const TextInput = ({ type, name, ...rest }) => (
  <StyledTextInput type={type} name={name} id={name} {...rest} />
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
};

TextInput.displayName = 'TextInput';

export default TextInput;
