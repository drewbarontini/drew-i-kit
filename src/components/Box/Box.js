import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { setProp, palette, theme } from '../../lib/props';
import { responsive } from '../../lib/responsive';

const Box = styled.div`
  ${setProp({
    prop: 'backgroundColor',
    themeKey: 'colors',
  })};

  ${props =>
    ifProp(
      'border',
      css`
        border: ${theme('borders.sizes.base')(props)} solid
          ${palette(`${props.border}`)(props)};
      `
    )}

  ${setProp({ prop: 'bottom', themeKey: 'spacing' })};
  ${setProp({ prop: 'display' })}
  ${setProp({ prop: 'height' })};
  ${setProp({ prop: 'left', themeKey: 'spacing' })};
  ${setProp({ prop: 'padding', themeKey: 'spacing' })};
  ${setProp({ prop: 'position' })};
  ${setProp({ prop: 'right', themeKey: 'spacing' })};
  ${setProp({ prop: 'top', themeKey: 'spacing' })};
  ${setProp({ prop: 'width' })};

  ${responsive};
`;

Box.propTypes = {
  backgroundColor: PropTypes.string,
  bottom: PropTypes.string,
  display: PropTypes.string,
  height: PropTypes.string,
  left: PropTypes.string,
  padding: PropTypes.string,
  position: PropTypes.string,
  right: PropTypes.string,
  top: PropTypes.string,
  width: PropTypes.string,
};

Box.displayName = 'Box';

export default Box;
