import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Link as GatsbyLink } from 'gatsby';

const styles = {
  base: {
    position: 'relative',
    display: 'inline-block',
    listStyle: 'none',
    fontSize: '1.125em',
    fontWeight: '300',
    lineHeight: '1.4',

    ':hover': {
      color: '#60d2f6',
      backgroundColor: '#fff'
    }
  },
  link: {
    display: 'inline-block',
    padding: '2.25em 1.25em 1.75em',
    fontSize: '1em',
    fontWeight: '500',
    lineHeight: '100%',
    textDecoration: 'none',
    color: '#001826'
  },
  active: {
    backgroundColor: '#f7f7f7'
  }
};

const NavbarItem = ({ style, link, title }) => {
  const StyledLink = Radium(GatsbyLink);

  return (
    <li className="list" style={[styles.base, style && style]}>
      <StyledLink className="link" to={link} style={styles.link} activeStyle={styles.active}>
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
