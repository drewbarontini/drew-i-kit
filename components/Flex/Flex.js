import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { setProp } from '../../lib/styleUtils';

const Flex = styled.div`
  display: flex;

  ${ifProp(
    'center',
    css`
      align-items: center;
      justify-content: center;
    `
  )};

  ${setProp({ prop: 'alignItems', cssProp: 'align-items' })};
  ${setProp({ prop: 'flex', cssProp: 'flex' })};
  ${setProp({ prop: 'flexDirection', cssProp: 'flex-direction' })};
  ${setProp({ prop: 'flexWrap', cssProp: 'flex-wrap' })};
  ${setProp({ prop: 'height' })};
  ${setProp({ prop: 'justifyContent', cssProp: 'justify-content' })};
`;

Flex.displayName = 'Flex';

export default Flex;
