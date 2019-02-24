import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import mq from '../common/mq';
import font from '../common/font';
import propTypes from '../common/propTypes';

import HeroImageContainer from './HeroImageContainer';
import Container from './Container';

const maxSiteWidth = 1290;
const gutterWidth = 30;
const maxWidth = maxSiteWidth + gutterWidth * 4;

const styles = {
  container: {
    default: {
      fontFamily: font('effra'),
      height: '100vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',

      [`@media (max-width: ${mq.max[720]})`]: {
        maxHeight: '592px'
      }
    },

    constrained: {
      height: '35vh',
      maxHeight: '592px',
      maxWidth: `${maxWidth}px`,
      minHeight: '300px',

      [`@media (max-width: ${mq.max[720]})`]: {
        maxHeight: 'none'
      }
    }
  }
};

const HeroBlock = ({ children, image, constrained, style }) => (
  <div
    className="HeroBlock"
    style={[styles.container.default, constrained && styles.container.constrained, style]}
  >
    <HeroImageContainer imagePath={image}>
      <Container
        style={{
          height: '100%',
          position: 'relative'
        }}
      >
        {children}
      </Container>
    </HeroImageContainer>
  </div>
);

HeroBlock.propTypes = {
  image: PropTypes.string.isRequired,
  constrained: PropTypes.bool,
  style: propTypes.style
};

HeroBlock.defaultProps = {
  constrained: false,
  style: {}
};

export default radium(HeroBlock);
