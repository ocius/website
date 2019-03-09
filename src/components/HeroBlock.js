import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import mq from '../common/mq';
import font from '../common/font';

import GradientOverlay from './GradientOverlay';
import Container from './Container';

const HeroContainer = styled(BackgroundImage)`
  color: #ffffff;
  font-family: ${font('effra')};
  height: calc(100vh - 4em);
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;

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
      }
    `}
`;

HeroContainer.defaultProps = {};

const HeroBlock = ({ children, image, constrained, gradient }) => (
  <HeroContainer Tag="section" className="HeroBlock" fluid={image} constrained={constrained}>
    <Container
      style={{
        height: '100%',
        position: 'relative',
        zIndex: 2
      }}
    >
      {children}
    </Container>

    {gradient && <GradientOverlay gradientType={gradient} />}
  </HeroContainer>
);

HeroBlock.propTypes = {
  image: PropTypes.string.isRequired,
  constrained: PropTypes.bool,
  gradient: PropTypes.string
};

HeroBlock.defaultProps = {
  constrained: false,
  gradient: ''
};

export default HeroBlock;
