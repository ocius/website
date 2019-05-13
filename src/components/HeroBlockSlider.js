import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BackgroundSlider from 'react-background-slider';

import { ContainerStyle, InnerContainer } from './HeroBlock';
import GradientOverlay from './GradientOverlay';

const HeroContainer = styled.div`
  ${ContainerStyle}
`;

HeroContainer.defaultProps = {};

const HeroBlockSlider = ({ children, images, gradient }) => (
  <HeroContainer Tag="section" className="HeroBlock">
    <BackgroundSlider images={images} duration={10} transition={1.5} />
    <InnerContainer>{children}</InnerContainer>

    {gradient && <GradientOverlay gradientType={gradient} />}
  </HeroContainer>
);

HeroBlockSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  gradient: PropTypes.string
};

HeroBlockSlider.defaultProps = {
  gradient: ''
};

export default HeroBlockSlider;
