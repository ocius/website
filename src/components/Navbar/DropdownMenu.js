import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Link as GatsbyLink } from 'gatsby';
import mq from '../../common/mq';

const Menu = styled.ul`
  display: ${prop('display', 'none')};
  margin: 0px;
  padding: 0px;
  position: absolute;
  left: 0;
  border: 1px solid #fff;
  background: white;
  z-index: 1000;
  text-align: left;
  list-style: none;

  @media (max-width: ${mq.max[768]}) {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
`;

const Link = styled(GatsbyLink)`
  display: block;
  padding: 10px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
  text-decoration: none;
  box-sizing: border-box;

  :focus,
  :hover {
    background: #efefef;
    color: #001826;
    text-decoration: none;
  }

  @media (max-width: ${mq.max[768]}) {
    background-color: transparent;
    color: #777;

    :hover {
      color: #333;
      background: transparent;
    }
  }
`;

class DropdownMenu extends Component {
  render() {
    const { open, menuItems, setRef } = this.props;
    return (
      <Menu ref={setRef} display={open ? 'block' : 'none'}>
        {menuItems.map(item => {
          return (
            <li key={menuItems.indexOf(item)}>
              <Link key={item.name} to={item.href}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </Menu>
    );
  }
}

DropdownMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  open: PropTypes.bool
};

DropdownMenu.defaultProps = {
  open: false
};

export default DropdownMenu;
