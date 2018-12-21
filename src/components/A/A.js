import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { hover } from '../../lib/hover';
import { palette, setProp, typography } from '../../lib/props';
import { responsive } from '../../lib/responsive';

const A = styled.a`
  ${setProp({
    prop: 'backgroundColor',
    themeKey: 'colors',
  })};
  ${setProp({
    prop: 'borderRadius',
    themeKey: 'borders.radius',
  })};
  ${setProp({
    prop: 'color',
    themeKey: 'colors',
    fallback: props => palette('primary.base')(props),
  })};
  ${setProp({
    prop: 'padding',
    themeKey: 'spacing',
  })};
  ${setProp({
    prop: 'textDecoration',
    fallback: 'none',
  })};

  /*
    NOTE: This is used because styled-components has an issue when 
    this is using React Router's Link component because it will pass
    down the prop all the way to the DOM where a warning is thrown.
  */
  ${hover(css`
    ${setProp({
      prop: 'data-hover-background-color',
      cssProp: 'background-color',
      themeKey: 'colors',
    })};
    ${setProp({
      prop: 'data-hover-color',
      cssProp: 'color',
      themeKey: 'colors',
      fallback: props => palette('fg')(props),
    })};
  `)};

  ${typography}
  ${responsive}
`;

A.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  padding: PropTypes.string,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  'data-hover-color': PropTypes.string,
  'data-hover-background-color': PropTypes.string,
};

A.displayName = 'A';

export default A;
