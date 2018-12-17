import PropTypes from 'prop-types';
import styled from 'styled-components';

import { palette, responsive } from '../../../lib';

const Placeholder = styled.div`
  background-color: ${palette('neutral.light[4]')};
  height: ${props => props.height}px;
  width: ${props => props.width}px;

  ${responsive};
`;

Placeholder.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

Placeholder.displayName = 'Placeholder';

export default Placeholder;
