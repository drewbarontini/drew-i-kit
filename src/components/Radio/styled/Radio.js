import styled from 'styled-components';

import { responsive } from '../../../lib/responsive';

const Radio = styled.input`
  ${responsive};
`;

Radio.displayName = 'StyledRadio';

export default Radio;
