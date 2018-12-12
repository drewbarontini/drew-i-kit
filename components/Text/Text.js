import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { setProp, theme } from '../../lib/styleUtils';

const Text = styled.p`
  font-size: ${theme('fonts.sizes.base')};

  ${ifProp(
    'uppercase',
    css`
      text-transform: uppercase;
    `
  )};

  ${setProp({
    prop: 'color',
    themeKey: 'colors',
  })};
  ${setProp({
    prop: 'fontSize',
    cssProp: 'font-size',
    themeKey: 'fonts.sizes',
  })};
  ${setProp({
    prop: 'fontStyle',
    cssProp: 'font-style',
  })};
  ${setProp({
    prop: 'fontWeight',
    cssProp: 'font-weight',
    themeKey: 'fonts.weights',
  })};
  ${setProp({
    prop: 'letterSpacing',
    cssProp: 'letter-spacing',
  })};
`;

Text.displayName = 'Text';

Text.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  uppercase: PropTypes.boolean,
};

export default Text;
