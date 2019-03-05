import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import assign from 'object-assign';

import rgb from '../common/color';

const GradientOverlay = ({ children, gradientType, color, style }) => {
  const styles = {
    container: {
      bottom: 0,
      left: 0,
      opacity: 0.15,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1
    },

    type: {
      linear: {
        opacity: 0.45,
        backgroundImage: `linear-gradient(-180deg, rgba(${rgb(color)}, 0) 53%, ${color} 100%)`
      },

      radial: {
        backgroundImage: `radial-gradient(55% 60%, rgba(${rgb(color)}, 0) 40%, ${color} 100%)`
      },

      leftCorner: {
        opacity: 0.67,
        backgroundImage: `linear-gradient(to right top, ${color}, rgba(${rgb(color)}, 0) 56%)`
      }
    }
  };

  return (
    <div
      className="GradientOverlay"
      style={assign({}, styles.container, gradientType && styles.type[gradientType], style)}
    >
      {children}
    </div>
  );
};

GradientOverlay.propTypes = {
  color: PropTypes.string,
  children: PropTypes.element,
  gradientType: PropTypes.oneOf(['', 'linear', 'radial', 'leftCorner']),
  style: PropTypes.objectOf(PropTypes.object)
};

GradientOverlay.defaultProps = {
  children: '',
  color: '#4cb4e6',
  gradientType: 'linear',
  style: {}
};

export default radium(GradientOverlay);
