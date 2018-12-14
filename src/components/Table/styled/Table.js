import styled from 'styled-components';

import { theme, palette } from '../../../lib';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    border-top: 1px solid ${palette('subdued')};
    padding: ${theme('spacing.base')};
    text-align: left;
    vertical-align: top;
  }

  thead th {
    border-bottom: 1px solid ${palette('subdued')};
    border-top: 0;
    padding-top: 0;
    vertical-align: bottom;
  }

  tbody + tbody {
    border-top: 1px solid ${palette('subdued')};
  }
`;

Table.displayName = 'Table';

export default Table;
