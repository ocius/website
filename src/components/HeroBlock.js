import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Img from 'gatsby-image';

import mq from '../common/mq';
import font from '../common/font';
import propTypes from '../common/propTypes';

import GradientOverlay from './GradientOverlay';
import Container from './Container';

const styles = {
  container: {
    default: {
      backgroundColor: '#125192',
      fontFamily: font('effra'),
      height: '100vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
      overflow: 'hidden',

      [`@media (max-width: ${mq.max[720]})`]: {
        maxHeight: '592px'
      }
    },

    constrained: {
      height: '35vh',
      maxHeight: '592px',
      minHeight: '300px',

      [`@media (max-width: ${mq.max[720]})`]: {
        maxHeight: 'none'
      }
    }
  },

  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  }
};

const HeroBlock = ({ children, image, constrained, gradient, style }) => (
  <div
    className="HeroBlock"
    style={[styles.container.default, constrained && styles.container.constrained, style]}
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

    {image && <Img sizes={image} style={styles.image} />}
    {gradient && <GradientOverlay gradientType={gradient} />}
  </div>
);

HeroBlock.propTypes = {
  image: PropTypes.objectOf(PropTypes.object),
  constrained: PropTypes.bool,
  gradient: PropTypes.string,
  style: propTypes.style
};

HeroBlock.defaultProps = {
  image: {},
  constrained: false,
  gradient: '',
  style: {}
};

export default radium(HeroBlock);
