import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { theme } from '../../lib/styleUtils';

const UL = styled.ul`
  list-style-type: ${ifProp('styled', 'disc', 'none')};
  margin: 0;
  padding: 0;

  ${ifProp(
    'styled',
    css`
      margin-left: ${theme('spacing.base')};
    `
  )};

  > *:not(:last-child) {
    margin-bottom: ${props => (props.flush ? '0' : theme('spacing.s'))};
  }
`;

export default UL;
