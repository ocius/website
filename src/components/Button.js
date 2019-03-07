import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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

const borderStyle = css`
  box-shadow: none;
`;

const roundedStyle = css`
  border-radius: 100px;
  padding-left: ${21 / 9}em;
  padding-right: ${21 / 9}em;
  padding-top: ${12 / 9}em;

  ${props =>
    props.size === 'tiny' &&
    css`
      padding-bottom: ${9 / 9}em;
    `}

  ${props =>
    props.size === 'small' &&
    css`
      padding-bottom: ${10 / 9}em;
    `}
    
  ${props =>
    props.size === 'medium' &&
    css`
      padding-bottom: ${9 / 9}em;
    `}
    
  ${props =>
    props.size === 'large' &&
    css`
      padding-bottom: ${10 / 9}em;
    `}
    
  ${props =>
    props.size === 'huge' &&
    css`
      padding-bottom: ${9 / 9}em;
    `}
`;

const fullStyle = css`
  display: block;
  width: 100%;
`;

const ButtonLink = styled(GatsbyLink)`
  appearance: none;
  backface-visibility: hidden;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  line-height: 1;
  overflow: hidden;
  padding-left: ${30 / 13}em;
  padding-right: ${30 / 13}em;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  transition: color 400ms ease-in-out, background-color 400ms ease-in-out, opacity 400ms ease-in-out;
  vertical-align: middle;
  white-space: nowrap;

  :focus,
  :hover,
  :active {
    text-decoration: none;
  }

  ${props =>
    props.color === 'gray' &&
    css`
      background-color: ${colors.bgSecondary};
      color: ${colors.textSecondary};
      box-shadow: 0 0 0 2px ${colors.borderPrimary} inset;

      :focus,
      :hover,
      :active {
        background-color: ${colors.accent};
        color: ${colors.bgPrimary};
      }
    `}

  ${props =>
    props.color === 'white' &&
    css`
      background-color: ${colors.bgPrimary};
      color: ${colors.borderPrimary};
      box-shadow: 0 0 0 2px ${colors.borderPrimary} inset;

      :focus,
      :hover,
      :active {
        background-color: ${colors.bgAccent};
        color: ${colors.textPrimary};
      }
    `}
    
  ${props =>
    props.color === 'transparent' &&
    css`
      background-color: transparent;
      color: ${colors.textOverlay};
      box-shadow: 0 0 0 2px ${colors.bgPrimary} inset;

      :focus,
      :hover,
      :active {
        background-color: transparent;
        color: ${colors.textPrimary};
      }
    `}
    
  ${props =>
    props.size === 'tiny' &&
    css`
      font-size: 9px;
      padding-bottom: ${9 / 9}em;
      padding-left: ${19 / 9}em;
      padding-right: ${19 / 9}em;
      padding-top: ${12 / 9}em;
    `}
    
  ${props =>
    props.size === 'small' &&
    css`
      font-size: 11px;
      padding-bottom: ${15 / 11}em;
      padding-top: ${18 / 11}em;
    `}
    
  ${props =>
    props.size === 'medium' &&
    css`
      font-size: 13px;
      padding-bottom: ${21 / 13}em;
      padding-top: ${26 / 13}em;
    `}
    
  ${props =>
    props.size === 'large' &&
    css`
      font-size: 15px;
      padding-bottom: ${23 / 15}em;
      padding-top: ${28 / 15}em;
    `}
    
  ${props =>
    props.size === 'huge' &&
    css`
      font-size: 17px;
      padding-bottom: ${25 / 17}em;
      padding-top: ${30 / 17}em;
    `}
    
  ${props => props.rounded && roundedStyle}
  ${props => props.full && fullStyle}
  ${props => !props.border && borderStyle}
`;

ButtonLink.defaultProps = {};

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
  return (
    <ButtonLink
      className={cn('Button', className)}
      style={customStyles}
      to={href}
      onClick={onClick}
      color={color}
      size={size}
      rounded={rounded}
      full={full}
      border={border}
      {...rest}
    >
      {children}
    </ButtonLink>
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

export default Button;
