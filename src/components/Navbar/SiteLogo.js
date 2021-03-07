import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import mq from '../../common/mq';

const LogoLink = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  user-select: none;

  @media (min-width: ${mq.min[768]}) and (max-width: ${mq.max[1024]}) {
    height: 25px;
  }

  @media (max-width: ${mq.max[768]}) {
    height: 19px;
    margin-right: auto;
    margin-left: 10px;
  }
`;

const LogoImage = styled.img`
  align-self: center;
  max-height: 100%;
`;

const SiteLogo = ({ className, href }) => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/ocius-logo-header.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              src
            }
          }
        }
      }
    `
  );

  return (
    <LogoLink className={className} key="brand" to={href}>
      <LogoImage src={file.childImageSharp.fluid.src} alt="Website logo" width="200" height="32" />
    </LogoLink>
  );
};

SiteLogo.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
};

SiteLogo.defaultProps = {
  className: '',
  href: '/',
};

export default SiteLogo;
