import styled from 'styled-components';

import { responsive } from '../../../lib';

const Checkbox = styled.input`
  ${responsive};
`;

Checkbox.displayName = 'StyledCheckbox';

export default Checkbox;
