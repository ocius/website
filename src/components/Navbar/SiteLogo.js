import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import mq from '../../common/mq';
// Import logo image
import Logo from '../../images/ocius-logo-header.png';

const LogoLink = styled(GatsbyLink)`
  display: inline-flex;
  max-width: 200px;

  @media (max-width: ${mq.max[768]}) {
    max-width: 130px;
  }
`;

const LogoImage = styled.img`
  align-self: center;
`;

const SiteLogo = ({ href }) => {
  return (
    <LogoLink key="brand" to={href}>
      <LogoImage src={Logo} alt="Ocius logo" />
    </LogoLink>
  );
};

SiteLogo.propTypes = {
  href: PropTypes.string
};

SiteLogo.defaultProps = {
  href: '/'
};

export default SiteLogo;
