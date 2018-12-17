import React from 'react';
import PropTypes from 'prop-types';

import StyledCheckbox from './styled/Checkbox';

const Checkbox = ({ name, ...rest }) => (
  <StyledCheckbox type="checkbox" name={name} id={name} {...rest} />
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
