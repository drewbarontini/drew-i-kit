import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setProp } from '../../lib/utils';

const Divider = styled.div`
  ${props =>
    setProp({
      prop: 'color',
      cssProp: 'background-color',
      themeKey: 'colors',
      fallback: props.theme.colors.subdued,
    })};
  ${setProp({
    prop: 'size',
    cssProp: 'height',
    fallback: '1px',
  })};
  ${setProp({
    prop: 'marginBottom',
    themeKey: 'spacing',
  })}
  ${setProp({
    prop: 'marginTop',
    themeKey: 'spacing',
  })}
  ${setProp({
    prop: 'width',
    fallback: '100%',
  })};
`;

Divider.propTypes = {
  color: PropTypes.string,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
};

Divider.displayName = 'Divider';

export default Divider;
