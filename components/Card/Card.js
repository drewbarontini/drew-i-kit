import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp, theme, palette } from '../../lib/styleUtils';

const Card = styled.div`
  background-color: ${palette('bg')};
  border-radius: ${theme('borders.radius.base')};
  box-shadow: ${theme('shadows.base')};
  padding: ${theme('spacing.base')};

  ${setProp({
    prop: 'padding',
    themeKey: 'spacing',
  })}
`;

Card.propTypes = {
  padding: PropTypes.string,
};

Card.displayName = 'Card';

export default Card;
