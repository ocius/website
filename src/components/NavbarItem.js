import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Link as GatsbyLink } from 'gatsby';

const styles = {
  base: {
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',

    '@media (min-width: 768px)': {
      float: 'left'
    }
  },
  link: {
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '15px',
    paddingRight: '15px',
    lineHeight: '20px',
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    color: '#777',

    ':hover': {
      color: '#333',
      backgroundColor: 'transparent'
    },

    ':focus': {
      color: '#333',
      backgroundColor: 'transparent'
    },

    '@media (min-width: 768px)': {
      paddingTop: '15px',
      paddingBottom: '15px'
    }
  }
};

const NavbarItem = ({ style, link, title }) => {
  const StyledLink = Radium(GatsbyLink);

  return (
    <li className="list" style={[styles.base, style && style]}>
      <StyledLink className="link" to={link} style={styles.link}>
        {title}
      </StyledLink>
    </li>
  );
};

NavbarItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.object)
};

NavbarItem.defaultProps = {
  style: {}
};

export default Radium(NavbarItem);
