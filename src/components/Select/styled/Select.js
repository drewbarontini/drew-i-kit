import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp, responsive } from '../../../lib';

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
