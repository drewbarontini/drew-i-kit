import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import StyledIcon from './styled/Icon';

const Icon = ({ color, height, name, size, theme, width, ...props }) => {
  const newWidth = size || width || theme.defaults.iconSize;
  const newHeight = size || height || theme.defaults.iconSize;

  return (
    <StyledIcon
      color={color}
      width={newWidth}
      height={newHeight}
      viewBox={`0 0 ${theme.defaults.iconSize} ${theme.defaults.iconSize}`}
      {...props}
    >
      {Array.isArray(theme.icons[name]) ? (
        theme.icons[name].map((d, i) => <path key={i} d={d} />)
      ) : (
        <path d={theme.icons[name]} />
      )}
    </StyledIcon>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
};

Icon.defaultProps = {
  color: null,
  height: null,
  size: null,
  width: null,
};

Icon.displayName = 'Icon';

export default withTheme(Icon);
