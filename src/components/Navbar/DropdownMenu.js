import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { Link as GatsbyLink } from 'gatsby';
import mq from '../../common/mq';

const Menu = styled.ul`
  display: ${ifProp('display', 'block', 'none')};
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
  /*
    Check if dropdown is open
   */
  isOpen = () => {
    const { open, active } = this.props;
    if (active) {
      return !!open;
    }
    return false;
  };

  render() {
    const { menuItems, setRef } = this.props;
    return (
      <Menu ref={setRef} display={!!this.isOpen()}>
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
  menuItems: PropTypes.objectOf(PropTypes.array),
  open: PropTypes.bool
};

DropdownMenu.defaultProps = {
  menuItems: [],
  open: false
};

export default DropdownMenu;
