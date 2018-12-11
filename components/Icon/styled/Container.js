import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp } from '../../../lib/styleUtils';

const Icon = styled.svg`
  align-self: center;
  display: inline-flex;
  vertical-align: middle;
  ${setProp({
    prop: 'color',
    cssProp: 'fill',
    themeKey: 'colors',
    fallback: 'currentColor',
  })}
  ${setProp({
    prop: 'marginLeft',
    cssProp: 'margin-left',
    themeKey: 'spacing',
  })}
  ${setProp({
    prop: 'marginRight',
    cssProp: 'margin-right',
    themeKey: 'spacing',
  })}
`;

Icon.propTypes = {
  color: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
};

export default Icon;
