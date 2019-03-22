import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Item = styled.li`
  position: relative;
  display: inline-block;
  list-style: none;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.4;
`;

const Link = styled(GatsbyLink)`
  display: inline-block;
  padding: 1.5em 1.2em;
  font-size: 1em;
  font-weight: 500;
  line-height: 100%;
  text-decoration: none;
  color: #001826;

  :hover {
    text-decoration: none;
  }

  ${Item}:hover & {
    color: #60d2f6;
    background-color: #ffffff;
  }
`;

const styles = {
  active: {
    backgroundColor: '#f7f7f7'
  }
};

const NavbarItem = ({ link, title }) => {
  return (
    <Item className="list">
      <Link className="link" to={link} activeStyle={styles.active}>
        {title}
      </Link>
    </Item>
  );
};

NavbarItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default NavbarItem;
