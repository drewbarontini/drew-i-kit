import PropTypes from 'prop-types';
import styled from 'styled-components';

import { palette } from '../../../lib/utils';

const Placeholder = styled.div`
  background-color: ${palette('subdued')};
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

Placeholder.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

Placeholder.displayName = 'Placeholder';

export default Placeholder;
