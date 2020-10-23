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
HeroContainer.defaultProps = {};

const HeroBlock = ({ children, image, constrained, masked }) => (
  <HeroContainer
    Tag="section"
    className="HeroBlock"
    fluid={image}
    constrained={constrained || undefined}
    masked={masked || undefined}
  >
    <InnerContainer>{children}</InnerContainer>

    {masked && <MaskOverlay />}
  </HeroContainer>
);

HeroBlock.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
  constrained: PropTypes.bool,
  masked: PropTypes.bool,
};

HeroBlock.defaultProps = {
  constrained: false,
  masked: false,
};

export default HeroBlock;
