import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import mq from '../common/mq';
import font from '../common/font';

import MaskOverlay from './MaskOverlay';
import Container from './Container';

export const ContainerStyle = css`
  color: #ffffff;
  font-family: ${font('main')};
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;

  @media (max-width: ${mq.max[720]}) {
    max-height: 592px;
  }
`;

const HeroContainer = styled(BackgroundImage)`
  ${ContainerStyle}

  ${(props) =>
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

  ${(props) =>
    props.masked &&
    css`
      padding-bottom: 80px;
    `}
`;

export const InnerContainer = styled(Container)`
  height: 100%;
  position: relative;
  z-index: 2;
`;

const ScrimOverlay = styled.div`
  inset: 0px;
  position: absolute;
  z-index: 1;
  background-image: linear-gradient(-180deg, rgba(0, 99, 131, 0) 53%, rgb(0, 99, 131) 100%);
`;

HeroContainer.defaultProps = {};

const HeroBlock = ({ children, image, constrained, scrim, masked }) => (
  <HeroContainer
    Tag="section"
    className="HeroBlock"
    fluid={image}
    constrained={constrained || undefined}
    masked={masked || undefined}
  >
    <InnerContainer>{children}</InnerContainer>

    {scrim && <ScrimOverlay />}
    {masked && <MaskOverlay />}
  </HeroContainer>
);

HeroBlock.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
  constrained: PropTypes.bool,
  scrim: PropTypes.bool,
  masked: PropTypes.bool,
};

HeroBlock.defaultProps = {
  constrained: false,
  scrim: false,
  masked: false,
};

export default HeroBlock;
