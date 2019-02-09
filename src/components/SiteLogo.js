import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import Radium from 'radium';
import mainLogo from '../images/main-ocius.png';

const styles = {
  logo: {
    paddingTop: '17px',
    marginTop: '8px',
    maxWidth: '200px',
    '@media (min-width: 768px)': {
      float: 'left'
    }
  }
};

const SiteLogo = ({ href, imgSrc }) => {
  const StyledLink = Radium(GatsbyLink);

  return (
    <StyledLink key="brand" to={href}>
      <img src={imgSrc} alt="Website logo" style={styles.logo} />
    </StyledLink>
  );
};

SiteLogo.propTypes = {
  href: PropTypes.string,
  imgSrc: PropTypes.string
};

SiteLogo.defaultProps = {
  href: '/',
  imgSrc: mainLogo
};

export default Radium(SiteLogo);
