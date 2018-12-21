import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { setProp } from '../../lib/props';
import { responsive } from '../../lib/responsive';

const Flex = styled.div`
  display: flex;

  ${ifProp(
    'center',
    css`
      align-items: center;
      justify-content: center;
    `
  )};

  ${setProp({ prop: 'alignItems' })};
  ${setProp({ prop: 'flex' })};
  ${setProp({ prop: 'flexDirection' })};
  ${setProp({ prop: 'flexWrap' })};
  ${setProp({ prop: 'height' })};
  ${setProp({ prop: 'justifyContent' })};

  ${responsive};
`;

Flex.displayName = 'Flex';

Flex.propTypes = {
  alignItems: PropTypes.string,
  center: PropTypes.bool,
  flex: PropTypes.string,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  height: PropTypes.string,
  justifyContent: PropTypes.string,
};

export default Flex;
