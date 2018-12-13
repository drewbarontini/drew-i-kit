import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { setProp, theme } from '../../lib/utils';

const Heading = styled.h1`
  font-size: ${theme('fonts.sizes.h1')};
  line-height: ${theme('fonts.lineHeight.heading')};
  margin: 0;

  ${setProp({
    prop: 'fontSize',
    themeKey: 'fonts.sizes',
  })}

  ${ifProp(
    'flush',
    css`
      margin-bottom: 0;
    `,
    css`
      margin-bottom: ${theme('spacing.s')};
    `
  )}
`;

Heading.propTypes = {
  flush: PropTypes.string,
  fontSize: PropTypes.string,
};

Heading.displayName = 'Heading';

export default Heading;
