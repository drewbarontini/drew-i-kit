import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import { setProp, palette } from '../../lib/utils';

const Divider = styled.div`
  ${setProp({
    prop: 'color',
    cssProp: 'background-color',
    themeKey: 'colors',
    fallback: props => palette('subdued')(props),
  })};
  ${setProp({
    prop: 'size',
    cssProp: props => ifProp('vertical', 'width', 'height')(props),
    fallback: '1px',
  })};
  ${setProp({
    prop: 'marginBottom',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: 'marginTop',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: props => ifProp('vertical', 'height', 'width')(props),
    fallback: '100%',
  })};
`;

Divider.propTypes = {
  color: PropTypes.string,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool,
  width: PropTypes.string,
};

Divider.displayName = 'Divider';

export default Divider;
