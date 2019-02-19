import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import cn from 'classnames';
import iconFromString from '../common/iconFromString';

const backgroundColors = {
  email: '#2c3643',
  facebook: '#3a5999',
  facebookMessenger: '#1472fb',
  pinterest: '#cb2027',
  reddit: '#fc4220',
  twitter: '#1da1f2',
  whatsapp: '#28eb76',
  weChat: '#7bb32e'
};

const iconNames = {
  email: 'Email',
  facebook: 'Facebook',
  facebookMessenger: 'FacebookMessenger',
  pinterest: 'Pinterest',
  reddit: 'Reddit',
  twitter: 'Twitter',
  whatsapp: 'Whatsapp',
  weChat: 'WeChat'
};

const sizeMultiplier = 2.5;

const SocialIconButton = ({ network, href, onClick, iconSize, id, className, style }) => {
  const size = iconSize * sizeMultiplier;

  const hoverStyles = {
    opacity: 0.7
  };

  const styles = {
    backgroundColor: backgroundColors[network],
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: `${iconSize}px`,
    height: `${size}px`,
    lineHeight: `${size}px`,
    textAlign: 'center',
    textDecoration: 'none',
    transition: `opacity 200ms ease-in-out`,
    width: `${size}px`,

    ':hover': hoverStyles,
    ':active': hoverStyles
  };

  return (
    <a
      className={cn('SocialIconButton', className)}
      id={id}
      href={href}
      onClick={onClick}
      style={[styles, style]}
      data-network={network}
    >
      {iconFromString(iconNames[network])}
    </a>
  );
};

SocialIconButton.propTypes = {
  network: PropTypes.oneOf([
    'email',
    'facebook',
    'facebookMessenger',
    'pinterest',
    'reddit',
    'twitter',
    'whatsapp',
    'weChat'
  ]).isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  iconSize: PropTypes.number,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object)
};

SocialIconButton.defaultProps = {
  href: null,
  onClick: null,
  iconSize: 16,
  id: '',
  className: '',
  style: {}
};

export default Radium(SocialIconButton);
