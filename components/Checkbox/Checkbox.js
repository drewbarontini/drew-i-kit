import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ name, ...rest }) => (
  <input type="checkbox" name={name} id={name} {...rest} />
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
