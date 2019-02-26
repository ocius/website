import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink, graphql, StaticQuery } from 'gatsby';
import Radium from 'radium';
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

const styles = {
  logo: {
    position: 'relative',
    paddingTop: '17px',
    marginTop: '2px',
    maxWidth: '200px',
    [`@media (min-width: ${mq.min[768]})`]: {
      float: 'left'
    },
    [`@media (max-width: ${mq.max[768]})`]: {
      paddingTop: '13px',
      width: '130px',
      left: '5px'
    }
  }
};

const SiteLogo = ({ href }) => {
  const StyledLink = Radium(GatsbyLink);

  return (
    <StaticQuery
      query={logoQuery}
      render={data => (
        <StyledLink key="brand" to={href}>
          <img src={data.file.childImageSharp.fluid.src} alt="Website logo" style={styles.logo} />
        </StyledLink>
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

export default Radium(SiteLogo);
