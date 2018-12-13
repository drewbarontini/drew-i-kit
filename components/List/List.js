import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { theme, setProp } from '../../lib/utils';

const List = styled.ul`
  margin: 0;
  padding: 0;

  ${setProp({
    prop: 'type',
    cssProp: 'list-style-type',
    fallback: 'none',
  })}

  ${ifProp(
    'type',
    css`
      margin-left: ${theme('spacing.base')};
    `
  )}

  > *:not(:last-child) {
    margin-bottom: ${props => (props.flush ? '0' : theme('spacing.s'))};
  }
`;

List.propTypes = {
  flush: PropTypes.string,
  type: PropTypes.string,
};

List.displayName = 'List';

export default List;
