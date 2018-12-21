import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { theme, typography } from '../../lib/props';
import { responsive } from '../../lib/responsive';

const Heading = styled.h1`
  font-size: ${theme('fonts.sizes.h1')};
  line-height: ${theme('fonts.lineHeight.heading')};
  margin: 0;

  ${ifProp(
    'flush',
    css`
      margin-bottom: 0;
    `,
    css`
      margin-bottom: ${theme('spacing.s')};
    `
  )}

  ${typography};
  ${responsive};
`;

Heading.propTypes = {
  flush: PropTypes.bool,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  textTransform: PropTypes.string,
};

Heading.displayName = 'Heading';

export default Heading;
