import React from 'react';
import PropTypes from 'prop-types';

import StyledSelect from './styled/Select';

const Select = ({ name, placeholder, options, ...rest }) => (
  <StyledSelect name={name} id={name} {...rest}>
    <option value="">{placeholder}</option>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  placeholder: 'Select...',
};

Select.displayName = 'Select';

export default Select;
