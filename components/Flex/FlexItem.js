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

export default FlexItem;
