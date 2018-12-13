import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { setProp, theme } from '../../lib/utils';

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
    themeKey: 'fonts.sizes',
  })};
  ${setProp({
    prop: 'fontStyle',
  })};
  ${setProp({
    prop: 'fontWeight',
    themeKey: 'fonts.weights',
  })};
  ${setProp({
    prop: 'letterSpacing',
  })};
  ${setProp({
    prop: 'textAlign',
  })};
`;

Text.displayName = 'Text';

Text.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  textAlign: PropTypes.string,
  uppercase: PropTypes.boolean,
};

export default Text;
