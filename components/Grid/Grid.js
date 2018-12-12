import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp } from '../../lib/styleUtils';

const Grid = styled.div`
  display: grid;

  ${setProp({
    prop: 'alignContent',
    cssProp: 'align-content',
  })};
  ${setProp({
    prop: 'alignItems',
    cssProp: 'align-items',
  })};
  ${setProp({
    prop: 'areas',
    cssProp: 'grid-template-areas',
  })};
  ${setProp({
    prop: 'autoColumns',
    cssProp: 'grid-auto-columns',
  })};
  ${setProp({
    prop: 'autoFlow',
    cssProp: 'grid-auto-flow',
  })};
  ${setProp({
    prop: 'autoRows',
    cssProp: 'grid-auto-rows',
  })};
  ${setProp({
    prop: 'columns',
    cssProp: 'grid-template-columns',
  })};
  ${setProp({
    prop: 'columnGap',
    cssProp: 'grid-column-gap',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: 'justifyContent',
    cssProp: 'justify-content',
  })};
  ${setProp({
    prop: 'gap',
    cssProp: 'grid-gap',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: 'grid',
  })};
  ${setProp({
    prop: 'placeContent',
    cssProp: 'place-content',
  })};
  ${setProp({
    prop: 'placeItems',
    cssProp: 'place-items',
  })};
  ${setProp({
    prop: 'rows',
    cssProp: 'grid-template-rows',
  })};
  ${setProp({
    prop: 'rowGap',
    cssProp: 'grid-row-gap',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: 'template',
    cssProp: 'grid-template',
  })};
`;

Grid.propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  autoColumns: PropTypes.string,
  autoFlow: PropTypes.string,
  autoRows: PropTypes.string,
  areas: PropTypes.string,
  columns: PropTypes.string,
  columnGap: PropTypes.string,
  gap: PropTypes.string,
  grid: PropTypes.string,
  justifyContent: PropTypes.string,
  placeContent: PropTypes.string,
  placeItems: PropTypes.string,
  rows: PropTypes.string,
  rowGap: PropTypes.string,
  template: PropTypes.string,
};

Grid.displayName = 'Grid';

export default Grid;
