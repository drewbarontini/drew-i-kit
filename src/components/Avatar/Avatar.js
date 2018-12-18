// DEPENDENCY: <Image />

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { theme, palette } from '../../lib/props';
import { responsive } from '../../lib/responsive';

import Image from '../Image';

const Avatar = styled(Image)`
  ${ifProp(
    'raised',
    css`
      border: 5px solid ${palette('white')};
      box-shadow: ${theme('shadows.base')};
    `
  )}

  ${ifProp(
    'rounded',
    css`
      border-radius: 100%;
    `
  )}

  ${responsive};
`;

Avatar.propTypes = {
  raised: PropTypes.string,
  rounded: PropTypes.string,
};

Avatar.displayName = 'Avatar';

export default Avatar;
