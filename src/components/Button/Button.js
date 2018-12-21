import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { hover } from '../../lib/hover';
import { theme, palette, setProp } from '../../lib/props';
import { responsive } from '../../lib/responsive';

const Button = styled.button`
  border: 0;
  border-style: solid;
  cursor: pointer;
  padding-bottom: 0;
  padding-top: 0;
  transition: ${theme('transition.base')};

  ${setProp({
    prop: 'backgroundColor',
    themeKey: 'colors',
    fallback: props =>
      props.primary ? palette('primary.base')(props) : 'transparent',
  })};
  ${setProp({
    prop: 'borderColor',
    themeKey: 'colors',
    fallback: props => (props.primary ? 'transparent' : palette('fg')(props)),
  })};
  ${setProp({
    prop: 'borderRadius',
    themeKey: 'borders.radius',
    fallback: props => theme('borders.radius.base')(props),
  })};
  ${setProp({
    prop: 'borderWidth',
    themeKey: 'borders.sizes',
    fallback: props => theme('borders.sizes.l')(props),
  })};
  ${setProp({
    prop: 'color',
    themeKey: 'colors',
    fallback: props =>
      props.primary ? palette('white')(props) : palette('fg')(props),
  })};
  ${setProp({
    prop: 'display',
    fallback: 'inline-block',
  })};
  ${setProp({
    prop: 'fontSize',
    themeKey: 'fonts.sizes',
    fallback: props => theme('fonts.sizes.xs')(props),
  })};
  ${setProp({
    prop: 'fontWeight',
    themeKey: 'fonts.weights',
    fallback: props => theme('fonts.weights.bold')(props),
  })};
  ${setProp({
    prop: 'letterSpacing',
    fallback: '1px',
  })};
  ${setProp({
    prop: 'lineHeight',
    themeKey: 'fonts.lineHeight',
    fallback: '3',
  })};
  ${setProp({
    prop: 'paddingLeft',
    themeKey: 'spacing',
    fallback: props => theme('spacing.base')(props),
  })};
  ${setProp({
    prop: 'paddingRight',
    themeKey: 'spacing',
    fallback: props => theme('spacing.base')(props),
  })};
  ${setProp({
    prop: 'textTransform',
    fallback: 'uppercase',
  })};

  ${hover(css`
    ${setProp({
      prop: 'backgroundColorHover',
      cssProp: 'background-color',
      themeKey: 'colors',
      fallback: props => (props.primary ? palette('fg')(props) : 'transparent'),
    })};
    ${setProp({
      prop: 'borderColorHover',
      cssProp: 'border-color',
      themeKey: 'colors',
      fallback: props =>
        props.primary ? 'transparent' : palette('primary.base')(props),
    })};
    ${setProp({
      prop: 'colorHover',
      cssProp: 'color',
      themeKey: 'colors',
      fallback: props =>
        props.primary
          ? palette('white')(props)
          : palette('primary.base')(props),
    })};
  `)}

  ${responsive};
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  borderColor: PropTypes.string,
  borderColorHover: PropTypes.string,
  borderRadius: PropTypes.string,
  borderWidth: PropTypes.string,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  display: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  primary: PropTypes.bool,
  textTransform: PropTypes.string,
};

Button.displayName = 'Button';

export default Button;
