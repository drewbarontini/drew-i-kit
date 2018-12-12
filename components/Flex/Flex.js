import styled from 'styled-components';

import { setProp } from '../../lib/styleUtils';

const Flex = styled.div`
  display: flex;

  ${setProp({ prop: 'alignItems', cssProp: 'align-items' })};
  ${setProp({ prop: 'flex', cssProp: 'flex' })};
  ${setProp({ prop: 'flexDirection', cssProp: 'flex-direction' })};
  ${setProp({ prop: 'justifyContent', cssProp: 'justify-content' })};
  ${setProp({ prop: 'flexWrap', cssProp: 'flex-wrap' })};
`;

Flex.displayName = 'Flex';

export default Flex;
