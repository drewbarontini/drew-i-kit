import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import StyledIcon from './styled/Icon';

const Icon = ({
  name,
  color,
  height = '20',
  size = '20',
  width = '20',
  theme,
  ...props
}) => {
  const newWidth = size || width;
  const newHeight = size || height;

  return (
    <StyledIcon
      color={color}
      width={newWidth}
      height={newHeight}
      viewBox="0 0 20 20"
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
  height: '20',
  size: '20',
  width: '20',
};

Icon.displayName = 'Icon';

export default withTheme(Icon);
