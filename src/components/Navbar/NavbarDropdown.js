import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import Radium from 'radium';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Dropdown = styled.li`
  position: relative;
  display: inline-block;
  list-style: none;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.4;

  :hover {
    color: #60d2f6;
    background-color: #fff;
  }
`;

const Caret = styled.b`
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
`;

const Link = styled(GatsbyLink)`
  display: inline-block;
  padding: 1.5em 1em 1.5em;
  font-size: 1em;
  font-weight: 500;
  line-height: 100%;
  text-decoration: none;
  color: #001826;
  background-color: ${prop('backgroundColor', 'transparent')};

  :hover {
    text-decoration: none;
  }
`;

class NavbarDropdown extends Component {
  state = {
    open: false
  };

  renderChildren = () => {
    const { children, index, activeIndex } = this.props;
    let active = false;
    // This particular dropdown is clicked
    if (index === activeIndex) {
      active = true;
    }
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        open: this.state.open,
        active
      });
    });
  };

  render() {
    const { name, link } = this.props;

    return (
      <Dropdown>
        <Link
          to={link}
          onMouseEnter={() => this.setState({ open: true })}
          onMouseLeave={() => this.setState({ open: false })}
          backgroundColor={this.state.open ? '#e7e7e7' : 'transparent'}
        >
          {name}
          <Caret />
        </Link>
        {this.renderChildren()}
      </Dropdown>
    );
  }
}

NavbarDropdown.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  index: PropTypes.number,
  activeIndex: PropTypes.number,
  parentCallBack: PropTypes.func
};

NavbarDropdown.defaultProps = {
  name: '',
  link: '',
  index: 0,
  activeIndex: 0,
  parentCallBack: null
};

export default Radium(NavbarDropdown);
