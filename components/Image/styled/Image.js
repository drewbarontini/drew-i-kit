import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import { theme } from '../../../lib/styleUtils';

const Image = styled.img`
  opacity: ${ifProp('isLoaded', '1', '0')};
  transition: opacity ${theme('transition.base')};
  visibility: ${ifProp('isLoaded', 'visible', 'hidden')};
`;

Image.propTypes = {
  isLoaded: PropTypes.boolean,
};

Image.displayName = 'StyledImage';

export default Image;
