import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import mq from '../../common/mq';

const logoQuery = graphql`
  query {
    file(relativePath: { eq: "images/main-ocius.png" }) {
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

const SiteLogo = ({ href }) => {
  return (
    <StaticQuery
      query={logoQuery}
      render={data => (
        <LogoLink key="brand" to={href}>
          <LogoImage src={data.file.childImageSharp.fluid.src} alt="Website logo" />
        </LogoLink>
      )}
    />
  );
};

SiteLogo.propTypes = {
  href: PropTypes.string
};

SiteLogo.defaultProps = {
  href: '/'
};

export default SiteLogo;
