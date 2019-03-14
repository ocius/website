import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp, prop, withProp } from 'styled-tools';

import rgb from '../common/color';

const GradientContainer = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.15;
  position: absolute;
  z-index: 1;

  ${switchProp('type', {
    linear: css`
      opacity: 0.45;
      background-image: linear-gradient(
        -180deg,
        rgba(${withProp('color', color => `${rgb(color)}`)}, 0) 53%,
        ${prop('color')} 100%
      );
    `,

    radial: css`
      background-image: radial-gradient(
        55% 60%,
        rgba(${withProp('color', color => `${rgb(color)}`)}, 0) 40%,
        ${prop('color')} 100%
      );
    `,

    leftCorner: css`
      opacity: 0.67;
      background-image: linear-gradient(
        to right top,
        ${prop('color')},
        rgba(${withProp('color', color => `${rgb(color)}`)}, 0) 56%
      );
    `
  })}
`;

GradientContainer.defaultProps = {};

const GradientOverlay = ({ children, gradientType, color }) => {
  return (
    <GradientContainer className="GradientOverlay" type={gradientType} color={color}>
      {children}
    </GradientContainer>
  );
};

GradientOverlay.propTypes = {
  color: PropTypes.string,
  children: PropTypes.element,
  gradientType: PropTypes.oneOf(['', 'linear', 'radial', 'leftCorner'])
};

GradientOverlay.defaultProps = {
  children: null,
  color: '#4cb4e6',
  gradientType: 'linear'
};

export default GradientOverlay;
