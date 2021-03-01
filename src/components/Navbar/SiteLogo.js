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
  display: flex;
  align-items: center;
  max-width: 200px;
  white-space: nowrap;
  user-select: none;

  @media (min-width: ${mq.min[768]}) and (max-width: ${mq.max[1024]}) {
    max-width: 160px;
  }

  @media (max-width: ${mq.max[768]}) {
    max-width: 120px;
    margin-right: auto;
    margin-left: 10px;
  }
`;

const LogoImage = styled.img`
  align-self: center;
`;

const SiteLogo = ({ className, href, maxHeight }) => (
  <StaticQuery
    query={logoQuery}
    render={(data) => (
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

SiteLogo.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  maxHeight: PropTypes.string,
};

SiteLogo.defaultProps = {
  className: '',
  href: '/',
  maxHeight: 'auto',
};

export default SiteLogo;
