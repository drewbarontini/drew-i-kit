import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp } from '../../../lib/utils';

const Select = styled.select`
  ${setProp({
    prop: 'size',
    cssProp: 'width',
    fallback: '200px',
  })}
`;

Select.propTypes = {
  size: PropTypes.string,
};

Select.displayName = 'StyledSelect';

export default Select;
