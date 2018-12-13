import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp, theme, palette } from '../../lib/utils';

const Card = styled.div`
  background-color: ${palette('bg')};
  border-radius: ${theme('borders.radius.base')};
  box-shadow: ${theme('shadows.base')};

  ${setProp({ prop: 'display' })}
  ${setProp({
    prop: 'padding',
    themeKey: 'spacing',
    fallback: props => theme('spacing.base')(props),
  })}
`;

Card.propTypes = {
  display: PropTypes.string,
  padding: PropTypes.string,
};

Card.displayName = 'Card';

export default Card;
