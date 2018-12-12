import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifNotProp } from 'styled-tools';

import { hover, palette, setProp } from '../../lib/styleUtils';

const A = styled.a`
  color: ${palette('primary')};
  text-decoration: none;

  ${setProp({
    prop: 'color',
    themeKey: 'colors',
  })};
  ${setProp({
    prop: 'fontSize',
    cssProp: 'font-size',
    themeKey: 'fonts.sizes',
  })};
  ${setProp({
    prop: 'textDecoration',
    cssProp: 'text-decoration',
  })};

  /*
    NOTE: This is used because styled-components has an issue when 
    this is using React Router's Link component because it will pass
    down the prop all the way to the DOM where a warning is thrown.
  */
  ${hover(css`
    color: ${props =>
      props['data-hover-color']
        ? palette(props['data-hover-color'])
        : palette('fg')};
  `)};
`;

A.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  textDecoration: PropTypes.string,
  'data-hover-color': PropTypes.string,
};

A.displayName = 'A';

export default A;
