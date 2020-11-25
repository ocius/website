import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
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
  min-height: 80vh;

  @media (max-width: ${mq.max[720]}) {
  }
`;

const HeroNoImageContainer = styled.div`
  ${ContainerStyle}
  background: ${(props) => props.fill};
  ${(props) =>
    props.constrained &&
    css`
      text-align: center;
      height: 35vh;
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

const HeroContainer = styled(BackgroundImage)`
  ${ContainerStyle}
  background: ${(props) => props.fill};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60% center;
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
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  ${switchProp('$color', {
    blue: css`
      background-image: linear-gradient(-180deg, rgba(0, 99, 131, 0) 53%, rgb(0, 99, 131) 100%);
    `,

    dark: css`
      background-image: linear-gradient(
        -180deg,
        rgba(19, 29, 33, 0) 0%,
        rgba(19, 29, 33, 0) 50%,
        rgb(19, 29, 33) 70%,
        rgb(19, 29, 33) 100%
      );
    `,
  })}
`;

HeroContainer.defaultProps = {};

const HeroBlock = ({ children, image, constrained, scrim, masked, fill, ...rest }) => {
  return image ? (
    <HeroContainer
      Tag="section"
      className="HeroBlock"
      fluid={image}
      constrained={constrained || undefined}
      masked={masked || undefined}
      fill={fill || 'white'}
      {...rest}
    >
      <InnerContainer>{children}</InnerContainer>

      {scrim && <ScrimOverlay $color={scrim} />}
      {masked && <MaskOverlay $color={fill} />}
    </HeroContainer>
  ) : (
    <HeroNoImageContainer
      Tag="section"
      className="HeroBlock"
      fluid={image}
      constrained={constrained || undefined}
      masked={masked || undefined}
      fill={fill || 'white'}
      {...rest}
    >
      <InnerContainer>{children}</InnerContainer>

      {scrim && <ScrimOverlay $color={scrim} />}
      {masked && <MaskOverlay $color={fill} />}
    </HeroNoImageContainer>
  );
};

HeroBlock.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
  constrained: PropTypes.bool,
  scrim: PropTypes.oneOf(['blue', 'dark']),
  masked: PropTypes.bool,
};

HeroBlock.defaultProps = {
  constrained: false,
  scrim: false,
  masked: false,
};

export default HeroBlock;
