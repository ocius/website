import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import assign from 'object-assign';
import cn from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import propTypes from '../common/propTypes';

const colors = {
  // Background colors
  bgPrimary: '#ffffff',
  textPrimary: '#000000',
  borderPrimary: '#000000',
  bgSecondary: '#efefef',
  textSecondary: '#7a96a2',
  accent: '#003859',
  bgAccent: 'rgba(126, 130, 126, 0.3)'
};

const hoverStyles = {
  base: {
    textDecoration: 'none'
  },

  white: {
    backgroundColor: colors.bgAccent,
    color: colors.textPrimary
  },

  gray: {
    backgroundColor: colors.accent,
    color: colors.bgPrimary
  },

  transparent: {
    backgroundColor: 'transparent',
    color: colors.textPrimary
  }
};

const styles = {
  base: {
    appearance: 'none',
    WebkitAppearance: 'none',
    backfaceVisibility: 'hidden',
    border: 0,
    borderRadius: 0,
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: 600,
    lineHeight: 1,
    overflow: 'hidden',
    paddingLeft: `${30 / 13}em`,
    paddingRight: `${30 / 13}em`,
    textAlign: 'center',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    letterSpacing: '0.6px',
    textTransform: 'uppercase',
    transition: `color 400ms ease-in-out,
      background-color 400ms ease-in-out,
      opacity 400ms ease-in-out`,
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    ':hover': hoverStyles.base,
    ':active': hoverStyles.base
  },

  color: {
    gray: {
      backgroundColor: colors.bgSecondary,
      color: colors.textSecondary,
      boxShadow: `0 0 0 2px ${colors.borderPrimary} inset`,

      ':hover': hoverStyles.gray,
      ':focus': hoverStyles.gray,
      ':active': hoverStyles.gray
    },

    white: {
      backgroundColor: colors.bgPrimary,
      color: colors.borderPrimary,
      boxShadow: `0 0 0 2px ${colors.borderPrimary} inset`,

      ':hover': hoverStyles.white,
      ':focus': hoverStyles.white,
      ':active': hoverStyles.white
    },

    transparent: {
      backgroundColor: 'transparent',
      color: colors.textOverlay,
      boxShadow: `0 0 0 2px ${colors.bgPrimary} inset`,

      ':hover': hoverStyles.transparent,
      ':focus': hoverStyles.transparent,
      ':active': hoverStyles.transparent
    }
  },

  size: {
    tiny: {
      fontSize: '9px',
      paddingBottom: `${9 / 9}em`,
      paddingLeft: `${19 / 9}em`,
      paddingRight: `${19 / 9}em`,
      paddingTop: `${12 / 9}em`
    },
    small: {
      fontSize: '11px',
      paddingBottom: `${15 / 11}em`,
      paddingTop: `${18 / 11}em`
    },
    medium: {
      fontSize: '13px',
      paddingBottom: `${21 / 13}em`,
      paddingTop: `${26 / 13}em`
    },
    large: {
      fontSize: '15px',
      paddingBottom: `${23 / 15}em`,
      paddingTop: `${28 / 15}em`
    },
    huge: {
      fontSize: '17px',
      paddingBottom: `${25 / 17}em`,
      paddingTop: `${30 / 17}em`
    }
  },

  type: {
    rounded: {
      base: {
        borderRadius: '100px', // a value large enough to scale
        paddingLeft: `${21 / 9}em`,
        paddingRight: `${21 / 9}em`,
        paddingTop: `${12 / 9}em`
      },

      tiny: {
        paddingBottom: `${9 / 9}em`
      },

      small: {
        paddingBottom: `${10 / 9}em`
      },

      medium: {
        paddingBottom: `${9 / 9}em`
      },

      large: {
        paddingBottom: `${10 / 9}em`
      },

      huge: {
        paddingBottom: `${9 / 9}em`
      }
    },
    full: {
      display: 'block',
      width: '100%'
    }
  }
};

/**
 * Button component
 *
 * @usage
 * <Button href="/foo">Bar</Button>
 */
function Button({
  href,
  children,
  onClick,
  color,
  size,
  rounded,
  full,
  border,
  customStyles,
  className,
  ...rest
}) {
  const StyledLink = Radium(GatsbyLink);

  const style = assign(
    {},
    styles.base,
    color && styles.color[color],
    size && styles.size[size],
    rounded && styles.type.rounded.base,
    rounded && styles.type.rounded[size],
    full && styles.type.full,
    customStyles,
    !border && {
      boxShadow: 'none'
    }
  );

  return (
    <StyledLink
      className={cn('Button', className)}
      style={style}
      to={href}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledLink>
  );
}

Button.propTypes = {
  /**
   * Pass an href prop to make the button an `a` element instead of a `button`
   */
  href: PropTypes.string,

  /**
   * Content for the button
   */
  children: PropTypes.node.isRequired,

  /**
   * Function to run when the button is clicked
   */
  onClick: PropTypes.func,

  /**
   * Color of the button
   */
  color: PropTypes.oneOf(['white', 'gray', 'transparent']),

  /**
   * Size of the button
   * tiny: 30 px tall
   * small: 44 px tall
   * medium: 60 px tall
   * large: 66 px tall
   * huge: 72 px tall
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),

  /**
   * Use a rounded button
   */
  rounded: PropTypes.bool,

  /**
   * Allow button to span available width
   */
  full: PropTypes.bool,

  /**
   * Special styles passed in props
   */
  customStyles: propTypes.style,

  /**
   * Use a border
   */
  border: PropTypes.bool,

  /**
   * Add classname to button
   */
  className: PropTypes.string
};

Button.defaultProps = {
  href: null,
  onClick: null,
  color: 'transparent',
  size: 'medium',
  rounded: false,
  full: false,
  border: true,
  customStyles: null,
  className: null
};

Button.styles = styles;

export default Radium(Button);
