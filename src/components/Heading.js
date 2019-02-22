import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import mq from '../common/mq';
import {
  fontSizeHeading1,
  fontSizeHeading2,
  fontSizeHeading4,
  fontSizeHeading5,
  fontSizeUppercase,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium
} from '../common/typography';
import font from '../common/font';
import propTypes from '../common/propTypes';

const styles = {
  base: {
    fontFamily: font('benton'),
    lineHeight: 1,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0
  },

  size: {
    tiny: {
      fontSize: `${fontSizeUppercase}px`
    },
    small: {
      fontSize: `${fontSizeUppercase}px`,

      [`@media (min-width: ${mq.min[600]})`]: {
        fontSize: `${fontSizeUppercase + 2}px`
      }
    },
    medium: {
      fontSize: `${fontSizeHeading5 + 2}px`,
      lineHeight: 40 / 26
    },
    large: {
      fontSize: `${fontSizeHeading2 - 8}px`,

      [`@media (min-width: ${mq.min[600]})`]: {
        fontSize: `${fontSizeHeading2 - 3}px`
      }
    },
    huge: {
      fontSize: `${fontSizeHeading4 + 2}px`,
      letterSpacing: '-1px',
      lineHeight: 36 / 30,

      [`@media (min-width: ${mq.min[600]})`]: {
        fontSize: `${fontSizeHeading1}px`,
        lineHeight: 70 / 64
      }
    }
  },

  weight: {
    extraThin: {
      fontWeight: fontWeightLight
    },
    thin: {
      fontWeight: fontWeightLight
    },
    normal: {
      fontWeight: fontWeightRegular
    },
    thick: {
      fontWeight: fontWeightMedium
    }
  },

  variant: {
    caps: {
      textTransform: 'uppercase'
    },

    truncate: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  },

  tracking: {
    tight: {
      letterSpacing: '-1px'
    },
    loose: {
      letterSpacing: '1px'
    }
  }
};

/**
 * Heading component
 */
function Heading({ children, level, size, weight, tracking, truncate, caps, override }) {
  const Component = `h${level}`;

  return (
    <Component
      className="Heading"
      style={[
        styles.base,
        size && styles.size[size],
        weight && styles.weight[weight],
        tracking && styles.tracking[tracking],
        truncate && styles.variant.truncate,
        caps && styles.variant.caps,
        override
      ]}
    >
      {children}
    </Component>
  );
}

Heading.propTypes = {
  /**
   * Text for the heading
   */
  children: PropTypes.node.isRequired,

  /**
   * Creates the heading element
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,

  /**
   * Declares the font size of the heading
   */
  size: PropTypes.oneOf(['huge', 'large', 'medium', 'small', 'tiny']).isRequired,

  /**
   * Adjusts the font weight of the heading
   */
  weight: PropTypes.oneOf(['thick', 'normal', 'thin', 'extraThin']),

  /**
   * Controls the letter spacing
   */
  tracking: PropTypes.oneOf(['tight', 'normal', 'loose']),

  /**
   * Whether or not to hide the text overflow with an ellipsis
   */
  truncate: PropTypes.bool,

  /**
   * Whether or not to set the heading in all caps
   */
  caps: PropTypes.bool,

  /**
   * Override styles
   */
  override: propTypes.style
};

Heading.defaultProps = {
  weight: 'normal',
  tracking: 'normal',
  truncate: false,
  caps: false,
  override: {}
};

Heading.styles = styles;

export default radium(Heading);
