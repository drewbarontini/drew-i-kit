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

export default Box;
