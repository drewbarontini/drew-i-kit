import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp } from '../../lib/utils';

const Space = styled.div`
  ${setProp({
    prop: 'bottom',
    cssProp: 'margin-bottom',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: 'left',
    cssProp: 'margin-left',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: 'right',
    cssProp: 'margin-right',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: 'top',
    cssProp: 'margin-top',
    themeKey: 'spacing',
  })};
`;

Space.propTypes = {
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  top: PropTypes.string,
};

Space.displayName = 'Space';

export default Space;
