import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp } from '../../lib/styleUtils';

const Box = styled.div`
  ${setProp({
    prop: 'backgroundColor',
    cssProp: 'background-color',
    themeKey: 'colors',
  })};
  ${setProp({ prop: 'bottom', themeKey: 'spacing' })};
  ${setProp({ prop: 'height' })};
  ${setProp({ prop: 'left', themeKey: 'spacing' })};
  ${setProp({ prop: 'position' })};
  ${setProp({ prop: 'right', themeKey: 'spacing' })};
  ${setProp({ prop: 'top', themeKey: 'spacing' })};
  ${setProp({ prop: 'width' })};
`;

Box.propTypes = {
  backgroundColor: PropTypes.string,
  bottom: PropTypes.string,
  height: PropTypes.string,
  left: PropTypes.string,
  position: PropTypes.string,
  right: PropTypes.string,
  top: PropTypes.string,
  width: PropTypes.string,
};

Box.displayName = 'Box';

export default Box;
