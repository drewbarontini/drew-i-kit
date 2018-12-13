import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ name, ...rest }) => (
  <input type="radio" name={name} id={name} {...rest} />
);

Radio.propTypes = {
  name: PropTypes.string.isRequired,
};

Radio.displayName = 'Radio';

export default Radio;
