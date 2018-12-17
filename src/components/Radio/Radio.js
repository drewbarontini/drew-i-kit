import React from 'react';
import PropTypes from 'prop-types';

import StyledRadio from './styled/Radio';

const Radio = ({ name, ...rest }) => (
  <StyledRadio type="radio" name={name} id={name} {...rest} />
);

Radio.propTypes = {
  name: PropTypes.string.isRequired,
};

Radio.displayName = 'Radio';

export default Radio;
