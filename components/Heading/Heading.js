import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { setProp, theme } from '../../lib/styleUtils';

const Heading = styled.h1`
  font-size: ${theme('fonts.sizes.h1')};

  ${setProp({
    prop: 'fontSize',
    cssProp: 'font-size',
    themeKey: 'fonts.sizes',
  })}

  ${ifProp(
    'flush',
    css`
      margin-bottom: 0;
    `
  )}
`;

Heading.propTypes = {
  flush: PropTypes.string,
};

Heading.displayName = 'Heading';

export default Heading;
