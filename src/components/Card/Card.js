import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../Box';

import { setProp, theme, palette } from '../../lib/utils';

const Card = styled(Box)`
  background-color: ${palette('white')};
  border-radius: ${theme('borders.radius.base')};
  box-shadow: ${theme('shadows.base')};

  ${setProp({
    prop: 'padding',
    themeKey: 'spacing',
    fallback: props => theme('spacing.base')(props),
  })}
`;

Card.propTypes = {
  padding: PropTypes.string,
};

Card.displayName = 'Card';

export default Card;
