import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { theme, setProp } from '../../lib/props';
import { responsive } from '../../lib/responsive';

const List = styled.ul`
  margin: 0;
  padding: 0;

  ${setProp({
    prop: 'type',
    cssProp: 'list-style-type',
    fallback: 'none',
  })};

  ${ifProp(
    'type',
    css`
      margin-left: ${theme('spacing.base')};
    `
  )};

  > *:not(:last-child) {
    margin-bottom: ${props => (props.flush ? '0' : theme('spacing.s'))};
  }

  ${responsive};
`;

List.propTypes = {
  flush: PropTypes.bool,
  type: PropTypes.string,
};

List.displayName = 'List';

export default List;
