import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp } from '../../lib/styleUtils';

const Box = styled.div`
  ${setProp({
    prop: 'backgroundColor',
    cssProp: 'background-color',
    themeKey: 'colors',
  })};
  ${setProp({ prop: 'height' })};
  ${setProp({ prop: 'width' })};
`;

Box.propTypes = {
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Box.displayName = 'Box';

export default Box;
