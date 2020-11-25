import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Stretch the mask container at the bottom
const Curve = styled.svg`
  position: absolute;
  bottom: 0;
  z-index: 1;

  path {
    fill: ${(props) => props.$color || 'white'};
  }
`;

Curve.defaultProps = {};

const MaskOverlay = ({ color }) => {
  return (
    <Curve viewBox="0 0 1920 80" $color={color}>
      <path d="M1920.623 184.785H-.255V34.33s502.98-77 960.028 0c457.05 77 960.85 0 960.85 0z" />
    </Curve>
  );
};

MaskOverlay.propTypes = {
  color: PropTypes.string,
};

MaskOverlay.defaultProps = {
  color: '#ffffff',
};

export default MaskOverlay;
