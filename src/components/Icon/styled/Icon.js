import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp } from '../../../lib/props';
import { responsive } from '../../../lib/responsive';

const Icon = styled.svg`
  align-self: center;
  display: inline-flex;
  vertical-align: middle;

  ${setProp({
    prop: 'color',
    cssProp: 'fill',
    themeKey: 'colors',
    fallback: 'currentColor',
  })};
  ${setProp({
    prop: 'marginBottom',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: 'marginLeft',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: 'marginRight',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: 'marginTop',
    themeKey: 'spacing',
  })};

  ${responsive};
`;

Icon.propTypes = {
  color: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
};

Icon.displayName = 'StyledIcon';

export default Icon;
