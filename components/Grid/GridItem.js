import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp } from '../../lib/styleUtils';

const GridItem = styled.div`
  ${setProp({
    prop: 'alignSelf',
    cssProp: 'align-self',
  })};
  ${setProp({
    prop: 'area',
    cssProp: 'grid-area',
  })};
  ${setProp({
    prop: 'column',
    cssProp: 'grid-column',
  })};
  ${setProp({
    prop: 'columnEnd',
    cssProp: 'grid-column-end',
  })};
  ${setProp({
    prop: 'columnStart',
    cssProp: 'grid-column-start',
  })};
  ${setProp({
    prop: 'justifySelf',
    cssProp: 'justify-self',
  })};
  ${setProp({
    prop: 'placeSelf',
    cssProp: 'place-self',
  })};
  ${setProp({
    prop: 'row',
    cssProp: 'grid-row',
  })};
  ${setProp({
    prop: 'rowEnd',
    cssProp: 'grid-row-end',
  })};
  ${setProp({
    prop: 'rowEnd',
    cssProp: 'grid-row-end',
  })};
`;

GridItem.propTypes = {
  alignSelf: PropTypes.string,
  area: PropTypes.string,
  column: PropTypes.string,
  columnEnd: PropTypes.string,
  columnStart: PropTypes.string,
  justifySelf: PropTypes.string,
  placeSelf: PropTypes.string,
  row: PropTypes.string,
  rowEnd: PropTypes.string,
  rowStart: PropTypes.string,
};

GridItem.displayName = 'GridItem';

export default GridItem;
