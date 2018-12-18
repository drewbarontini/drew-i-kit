import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { setProp, palette, theme, spacing } from '../../lib/props';
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
  ${setProp({ prop: 'position' })};
  ${setProp({ prop: 'right', themeKey: 'spacing' })};
  ${setProp({ prop: 'textAlign' })};
  ${setProp({ prop: 'top', themeKey: 'spacing' })};
  ${setProp({ prop: 'width' })};

  ${spacing};
  ${responsive};
`;

Box.propTypes = {
  backgroundColor: PropTypes.string,
  border: PropTypes.bool,
  bottom: PropTypes.string,
  display: PropTypes.string,
  height: PropTypes.string,
  left: PropTypes.string,
  margin: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  padding: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingTop: PropTypes.string,
  position: PropTypes.string,
  right: PropTypes.string,
  textAlign: PropTypes.string,
  top: PropTypes.string,
  width: PropTypes.string,
};

Box.displayName = 'Box';

export default Box;
