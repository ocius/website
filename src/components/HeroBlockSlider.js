import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BackgroundSlider from 'react-background-slider';

import { ContainerStyle, InnerContainer } from './HeroBlock';
import MaskOverlay from './MaskOverlay';

const HeroContainer = styled.div`
  ${ContainerStyle}
`;

HeroContainer.defaultProps = {};

const HeroBlockSlider = ({ children, images, masked }) => (
  <HeroContainer Tag="section" className="HeroBlock">
    <BackgroundSlider images={images} duration={10} transition={1.5} />
    <InnerContainer>{children}</InnerContainer>

    {masked && <MaskOverlay />}
  </HeroContainer>
);

HeroBlockSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  masked: PropTypes.bool,
};

HeroBlockSlider.defaultProps = {
  masked: false,
};

export default HeroBlockSlider;
