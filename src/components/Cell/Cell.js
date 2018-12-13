import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { setProp, theme } from '../../lib/utils';

const Cell = styled.div`
  ${setProp({
    prop: 'size',
    cssProp: 'max-width',
    themeKey: 'sizing',
    fallback: props => theme('sizing.base')(props),
  })};
  ${setProp({
    prop: 'minWidth',
    themeKey: 'sizing',
  })};

  ${ifProp(
    'center',
    css`
      margin-left: auto;
      margin-right: auto;
    `
  )};
`;

Cell.propTypes = {
  center: PropTypes.bool,
  minWidth: PropTypes.string,
  size: PropTypes.string,
};

Cell.displayName = 'Cell';

export default Cell;
