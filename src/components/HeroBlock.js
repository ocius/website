import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

import MaskOverlay from './MaskOverlay';
import Container from './Container';

export const ContainerStyle = css`
  color: #ffffff;
  font-family: ${(props) => props.theme.fonts.main};
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.section`
  ${ContainerStyle}
  background-color: ${(props) => (props.fallbackColor ? props.fallbackColor : 'rgb(0, 99, 131)')};
  background-image: url(${(props) => (props.fluid ? props.fluid.srcWebp : '')}),
    url(${(props) => (props.fluid ? props.fluid.src : '')});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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
        rgb(19, 29, 33, 0) 70%,
        rgb(19, 29, 33) 100%
      );
    `,
  })}
`;

HeroContainer.defaultProps = {};

const HeroBlock = ({ children, image, fallbackColor, constrained, scrim, masked }) => (
  <HeroContainer
    className="HeroBlock"
    fluid={image}
    constrained={constrained || undefined}
    fallbackColor={fallbackColor}
    masked={masked || undefined}
  >
    <InnerContainer>{children}</InnerContainer>

    {scrim && <ScrimOverlay $color={scrim} />}
    {masked && <MaskOverlay />}
  </HeroContainer>
);

HeroBlock.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
  fallbackColor: PropTypes.string,
  constrained: PropTypes.bool,
  scrim: PropTypes.oneOf(['blue', 'dark']),
  masked: PropTypes.bool,
};

HeroBlock.defaultProps = {
  constrained: false,
  fallbackColor: '',
  scrim: false,
  masked: false,
};

export default HeroBlock;
