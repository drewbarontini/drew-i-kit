// DEPENDENCY: <Box />

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Box from '../Box';

import { setProp, theme, palette } from '../../lib';

const Card = styled(Box)`
  ${setProp({
    prop: 'backgroundColor',
    themeKey: 'colors',
    fallback: props => palette('white')(props),
  })};
  ${setProp({
    prop: 'color',
    themeKey: 'colors',
  })};
  ${setProp({
    prop: 'radius',
    cssProp: 'border-radius',
    themeKey: 'borders.radius',
    fallback: props =>
      ifProp('square', '0', theme('borders.radius.base')(props))(props),
  })};
  ${setProp({
    prop: 'shadow',
    cssProp: 'box-shadow',
    themeKey: 'shadows',
    fallback: props => ifProp('flat', '0', theme('shadows.base')(props))(props),
  })};
  ${setProp({
    prop: 'padding',
    themeKey: 'spacing',
    fallback: props => theme('spacing.base')(props),
  })};
`;

Card.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  flat: PropTypes.bool,
  padding: PropTypes.string,
  radius: PropTypes.string,
  shadow: PropTypes.string,
  square: PropTypes.bool,
};

Card.displayName = 'Card';

export default Card;
