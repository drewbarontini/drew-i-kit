import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Placeholder from './styled/Placeholder';
import StyledImage from './styled/Image';

class Image extends Component {
  static propTypes = {
    alt: PropTypes.string.isRequired,
    height: PropTypes.string,
    onLoaded: PropTypes.func,
    src: PropTypes.string.isRequired,
    width: PropTypes.string,
  };

  static defaultProps = {
    height: null,
    onLoaded: () => {},
    width: null,
  };

  state = {
    isLoaded: false,
    hasError: false,
  };

  handleLoad = () => {
    const { onLoaded } = this.props;
    const { width, height } = this.node;

    this.setState(
      {
        isLoaded: true,
      },
      onLoaded && onLoaded({ width, height })
    );
  };

  handleError = () => {
    this.setState({
      hasError: true,
    });
  };

  render() {
    const { isLoaded, hasError } = this.state;
    const { src, alt, height, width, ...props } = this.props;
    const placeholder = <Placeholder width={width} height={height} />;

    if (hasError) {
      return placeholder;
    }

    return (
      <Fragment>
        {isLoaded ? null : placeholder}
        <StyledImage
          ref={node => {
            this.node = node;
          }}
          src={src}
          alt={alt}
          height={height}
          width={width}
          onLoad={this.handleLoad}
          onError={this.handleError}
          isLoaded={isLoaded}
          data-testid="image"
          {...props}
        />
      </Fragment>
    );
  }
}

export default Image;
