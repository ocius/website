import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import iconFromString from '../common/iconFromString';

const Link = styled.a`
  padding: 0.5em 1em;
  margin: 0 0 0.625em;
  font-family: inherit;
  font-size: 1em;
  border: none;
  outline: none;
  background: #001826;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 100%;
  cursor: pointer;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  zoom: 1;
  *display: inline;

  & + & {
    margin-left: 5px;
  }
`;

const iconNames = {
  facebook: 'Facebook',
  reddit: 'Reddit',
  twitter: 'Twitter'
};

const SocialLink = ({ network, href, ...rest }) => {
  const label = `"Follow us on ${iconNames[network]}`;

  return (
    <Link href={href} target="_blank" rel="noopener" aria-label={label} {...rest}>
      {iconFromString(iconNames[network])}
    </Link>
  );
};

SocialLink.propTypes = {
  network: PropTypes.oneOf(['facebook', 'reddit', 'twitter']).isRequired,
  href: PropTypes.string.isRequired
};

export default SocialLink;
