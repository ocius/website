import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import mq from '../../common/mq';

const logoQuery = graphql`
  query {
    file(relativePath: { eq: "images/ocius-logo-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          src
        }
      }
    }
  }
`;

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

const SiteLogo = ({ className, href, maxHeight }) => {
  return (
    <StaticQuery
      query={logoQuery}
      render={data => (
        <LogoLink className={className} key="brand" to={href}>
          <LogoImage
            style={{ maxHeight }}
            src={data.file.childImageSharp.fluid.src}
            alt="Website logo"
          />
        </LogoLink>
      )}
    />
  );
};

SiteLogo.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  maxHeight: PropTypes.string
};

SiteLogo.defaultProps = {
  className: '',
  href: '/',
  maxHeight: 'auto'
};

export default SiteLogo;
