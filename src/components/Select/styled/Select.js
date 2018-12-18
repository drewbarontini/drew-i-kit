import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp } from '../../../lib/props';
import { responsive } from '../../../lib/responsive';

const Select = styled.select`
  ${setProp({
    prop: 'size',
    cssProp: 'width',
    fallback: '200px',
  })};

  ${responsive};
`;

Select.propTypes = {
  size: PropTypes.string,
};

Select.displayName = 'StyledSelect';

export default Select;
