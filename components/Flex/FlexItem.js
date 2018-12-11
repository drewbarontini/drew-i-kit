import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp } from '../../lib/styleUtils';

const FlexItem = styled.div`
  ${setProp({
    prop: 'size',
    cssProp: 'flex-basis',
  })};
  ${setProp({
    prop: 'marginRight',
    cssProp: 'margin-right',
    themeKey: 'spacing',
  })};
`;

FlexItem.propTypes = {
  marginRight: PropTypes.string,
  size: PropTypes.string,
};

export default FlexItem;
