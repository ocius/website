import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

// Stretch the mask container at the bottom
const Curve = styled.svg`
  position: absolute;
  ${switchProp('$position', {
    top: css`
      top: 0;
    `,
    bottom: css`
      bottom: 0;
    `,
  })}
  z-index: 1;

  path {
    fill: ${(props) => props.$color || 'white'};
  }
`;

const MaskOverlay = ({ color, flipped, position }) => {
  if (position === 'top') {
    // Return vertically flipped version of the SVG
    return (
      <Curve viewBox="0 0 1920 80" $color={color} $position={position}>
        {flipped ? (
          <path d="M1920.623-105.892V44.563s-503.8-77-960.85 0c-457.048 77-960.028 0-960.028 0v-150.455z" />
        ) : (
          <path d="M-.255-105.892V44.563s503.8-77 960.85 0c457.048 77 960.028 0 960.028 0v-150.455z" />
        )}
      </Curve>
    );
  }

  return (
    <Curve viewBox="0 0 1920 80" $color={color} $position={position}>
      {flipped ? (
        <path d="M-.255 184.785h1920.878V34.33s-502.98-77-960.028 0c-457.05 77-960.85 0-960.85 0z" />
      ) : (
        <path d="M1920.623 184.785H-.255V34.33s502.98-77 960.028 0c457.05 77 960.85 0 960.85 0z" />
      )}
    </Curve>
  );
};

MaskOverlay.propTypes = {
  color: PropTypes.string,
  flipped: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'bottom']),
};

MaskOverlay.defaultProps = {
  color: 'white',
  flipped: false,
  position: 'bottom',
};

export default MaskOverlay;
