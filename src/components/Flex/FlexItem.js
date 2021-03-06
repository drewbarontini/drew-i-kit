import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp } from '../../lib/props';
import { responsive } from '../../lib/responsive';

const FlexItem = styled.div`
  ${setProp({
    prop: 'size',
    cssProp: 'flex-basis',
  })};
  ${setProp({
    prop: 'margin',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: 'marginRight',
    themeKey: 'spacing',
  })};

  ${responsive};
`;

FlexItem.propTypes = {
  margin: PropTypes.string,
  marginRight: PropTypes.string,
  size: PropTypes.string,
};

FlexItem.displayName = 'FlexItem';

export default FlexItem;
