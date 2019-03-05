import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import assign from 'object-assign';
import BackgroundImage from 'gatsby-background-image';

import mq from '../common/mq';
import font from '../common/font';
import propTypes from '../common/propTypes';

import GradientOverlay from './GradientOverlay';
import Container from './Container';

const styles = {
  container: {
    default: {
      fontFamily: font('effra'),
      height: '100vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
      overflow: 'hidden',

      [`@media (maxWidth: ${mq.max[720]})`]: {
        maxHeight: '592px'
      }
    },

    constrained: {
      height: '35vh',
      maxHeight: '592px',
      minHeight: '300px',

      [`@media (maxWidth: ${mq.max[720]})`]: {
        maxHeight: 'none'
      }
    }
  }
};

const HeroBlock = ({ children, image, constrained, gradient, style }) => (
  <BackgroundImage
    Tag="section"
    className="HeroBlock"
    fluid={image}
    style={assign({}, styles.container.default, constrained && styles.container.constrained, style)}
  >
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
  </BackgroundImage>
);

HeroBlock.propTypes = {
  image: PropTypes.string.isRequired,
  constrained: PropTypes.bool,
  gradient: PropTypes.string,
  style: propTypes.style
};

HeroBlock.defaultProps = {
  constrained: false,
  gradient: '',
  style: {}
};

export default radium(HeroBlock);
