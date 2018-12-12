import React from 'react';
import PropTypes from 'prop-types';

import icons from '../../config/icons';

import Container from './styled/Container';

const Icon = ({
  name,
  color,
  height = '20',
  size = '20',
  width = '20',
  ...props
}: Props = {}) => {
  const newWidth = size || width;
  const newHeight = size || height;

  return (
    <Container
      color={color}
      width={newWidth}
      height={newHeight}
      viewBox="0 0 20 20"
      {...props}
    >
      {Array.isArray(icons[name]) ? (
        icons[name].map((d, i) => <path key={i} d={d} />)
      ) : (
        <path d={icons[name]} />
      )}
    </Container>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
};

Icon.displayName = 'Icon';

export default Icon;
