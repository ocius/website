import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop, withProp } from 'styled-tools';
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
const IconButton = styled.a`
  background-color: ${prop('backgroundColor')};
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: ${prop('iconSize', 16)}px;
  width: ${withProp('iconSize', size => `${size * sizeMultiplier}`)}px;
  height: ${withProp('iconSize', size => `${size * sizeMultiplier}`)}px;
  line-height: ${withProp('iconSize', size => `${size * sizeMultiplier}`)}px;
  text-align: center;
  text-decoration: none;
  border-radius: 100%;
  transition: opacity 200ms ease-in-out;

  & + & {
    margin-left: 12px;
  }

  :hover,
  :active {
    opacity: 0.7;
  }
`;

const SocialIconButton = ({ network, href, onClick, iconSize, id, className }) => {
  return (
    <IconButton
      backgroundColor={backgroundColors[network]}
      iconSize={iconSize}
      className={cn('SocialIconButton', className)}
      id={id}
      href={href}
      onClick={onClick}
      data-network={network}
    >
      {iconFromString(iconNames[network])}
    </IconButton>
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
  className: PropTypes.string
};

SocialIconButton.defaultProps = {
  href: null,
  onClick: null,
  iconSize: 16,
  id: '',
  className: ''
};

export default SocialIconButton;
