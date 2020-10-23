import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Stretch the mask container at the bottom
const MaskContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: ${(props) => props.$color || 'white'};
  mask: url(#wave);
  z-index: 10;
`;

MaskContainer.defaultProps = {};

const MaskOverlay = ({ color }) => {
  return (
    <>
      <MaskContainer $color={color} />
      <svg viewBox="0 0 1920 80" width="0" height="0">
        <defs>
          <mask id="wave">
            <rect y="2.04" width="1920" height="78.78" fill="white" />
            <path d="M0-1438.32V46.6s502.75 77 959.59 0 960.41 0 960.41 0v-1484.92z" fill="black" />
          </mask>
        </defs>
      </svg>
    </>
  );
};

MaskOverlay.propTypes = {
  color: PropTypes.string,
};

MaskOverlay.defaultProps = {
  color: '#ffffff',
};

export default MaskOverlay;
