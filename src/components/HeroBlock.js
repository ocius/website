import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import BackgroundSlider from 'react-background-slider';
import mq from '../common/mq';
import font from '../common/font';

import GradientOverlay from './GradientOverlay';
import Container from './Container';

const HeroContainer = styled.div`
  color: #ffffff;
  font-family: ${font('main')};
  height: calc(100vh - 4em);
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;

  &:before {
    background-position: center top !important;
  }

  @media (max-width: ${mq.max[720]}) {
    max-height: 592px;
  }

  ${props =>
    props.constrained &&
    css`
      text-align: center;
      height: 35vh;
      max-height: 592px;
      min-height: 300px;

      @media (max-width: ${mq.max[720]}) {
        max-height: none;
        height: auto;
      }
    `}
`;

const StyledContainer = styled(Container)`
  height: 100%;
  position: relative;
  z-index: 2;
`;

HeroContainer.defaultProps = {};

const HeroBlock = ({ children, images, constrained, gradient }) => (
  <HeroContainer Tag="section" className="HeroBlock" constrained={constrained}>
    <BackgroundSlider images={images} duration={10} transition={2} />
    <StyledContainer>{children}</StyledContainer>

    {gradient && <GradientOverlay gradientType={gradient} />}
  </HeroContainer>
);

HeroBlock.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  constrained: PropTypes.bool,
  gradient: PropTypes.string
};

HeroBlock.defaultProps = {
  constrained: false,
  gradient: ''
};

export default HeroBlock;
