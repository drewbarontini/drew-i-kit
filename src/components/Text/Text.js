import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { setProp, theme, typography } from '../../lib/props';
import { responsive } from '../../lib/responsive';

const Text = styled.p`
  ${setProp({
    prop: 'color',
    themeKey: 'colors',
  })};
  ${setProp({
    prop: 'fontSize',
    themeKey: 'fonts.sizes',
    fallback: props => theme('fonts.sizes.base')(props),
  })};

  ${ifProp(
    'uppercase',
    css`
      text-transform: uppercase;
    `
  )};

  ${props => typography(props, ['fontSize'])};
  ${responsive};
`;

Text.displayName = 'Text';

Text.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  textAlign: PropTypes.string,
  textTransform: PropTypes.string,
  uppercase: PropTypes.bool,
};

export default Text;
