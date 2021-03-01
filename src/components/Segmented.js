import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { withProp } from 'styled-tools';

// Import media queries
import mq from '../common/mq';

const SegmentedContainer = styled.div`
  padding-bottom: ${withProp('multiplier', (multiplier) => `${multiplier * 2.25}rem`)};
  margin-bottom: ${withProp('multiplier', (multiplier) => `${multiplier * 2.25}rem`)};
  ${(props) =>
    props.borderBottom &&
    css`
      border-bottom: 2px solid #e4e5e6;
    `}

  @media (min-width: ${mq.min['1024']}) {
    padding-bottom: ${withProp('multiplier', (multiplier) => `${multiplier * 3.6}rem`)};
    margin-bottom: ${withProp('multiplier', (multiplier) => `${multiplier * 3.6}rem`)};
  }
`;

const Segmented = ({ children, borderBottom, multiplier, ...rest }) => (
  <SegmentedContainer
    className="Segmented"
    multiplier={multiplier}
    borderBottom={borderBottom}
    {...rest}
  >
    {children}
  </SegmentedContainer>
);

Segmented.propTypes = {
  children: PropTypes.node.isRequired,
  borderBottom: PropTypes.bool,
  multiplier: PropTypes.number,
};

Segmented.defaultProps = {
  borderBottom: false,
  multiplier: 1,
};

export default Segmented;
