import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const Caret = styled.b`
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 7px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
`;

const Link = styled(GatsbyLink)`
  display: inline-block;
  padding: 1em;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 100%;
  text-decoration: none;
  color: #001826;
  background-color: transparent;

  :hover {
    text-decoration: none;
    color: #60d2f6;
    background-color: #ffffff;
  }

  :focus {
    background: #efefef;
    color: #001826;
  }
`;

const Dropdown = styled.li`
  position: relative;
  display: inline-block;
  list-style: none;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.4;

  &:hover,
  &:focus-within {
    ul {
      max-height: 500px;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const NavbarDropdown = ({ name, link, children }) => (
  <Dropdown>
    <Link to={link} aria-haspopup="true">
      {name}
      <Caret />
    </Link>
    {children}
  </Dropdown>
);

NavbarDropdown.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

NavbarDropdown.defaultProps = {
  name: '',
  link: '',
};

export default NavbarDropdown;
