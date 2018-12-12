import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import icons from '../../config/icons';

import Container from './styled/Container';

const getDefaultIcon = () =>
  get(icons.filter(icon => icon.name === 'circle'), '0.path');

const getPath = (name: string) =>
  get(icons.filter(icon => icon.name === name), '0.path', getDefaultIcon());

const isArray = (name: string) => Array.isArray(getPath(name));

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
      {isArray(name) ? (
        getPath(name).map((d, i) => <path key={i} d={d} />)
      ) : (
        <path d={getPath(name)} />
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
