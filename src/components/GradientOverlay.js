import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import rgb from '../common/color';

const GradientContainer = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.15;
  position: absolute;
  z-index: 1;

  ${props =>
    props.type === 'linear' &&
    css`
      opacity: 0.45;
      background-image: linear-gradient(
        -180deg,
        rgba(${rgb(props.color)}, 0) 53%,
        ${props.color} 100%
      );
    `}

  ${props =>
    props.type === 'radial' &&
    css`
      background-image: radial-gradient(
        55% 60%,
        rgba(${rgb(props.color)}, 0) 40%,
        ${props.color} 100%
      );
    `}
    
  ${props =>
    props.type === 'leftCorner' &&
    css`
      opacity: 0.67;
      background-image: linear-gradient(
        to right top,
        ${props.color},
        rgba(${rgb(props.color)}, 0) 56%
      );
    `}
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
  children: '',
  color: '#4cb4e6',
  gradientType: 'linear'
};

export default GradientOverlay;
