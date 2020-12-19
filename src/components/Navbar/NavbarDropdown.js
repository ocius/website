import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Dropdown = styled.li`
  position: relative;
  display: inline-block;
  list-style: none;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.4;
`;

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
  background-color: ${prop('backgroundсolor', 'transparent')};

  :hover {
    text-decoration: none;
    color: #60d2f6;
    background-color: #ffffff;
  }
`;

class NavbarDropdown extends Component {
  isDropdownMounted = false;

  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.setRef = this.setRef.bind(this);
    this.mouseOnDropdown = this.mouseOnDropdown.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  /**
   * Set isDropdownMounted to true to control possible memory leaks
   */
  componentDidMount() {
    this.isDropdownMounted = true;
  }

  componentWillUnmount() {
    this.isDropdownMounted = false;
    // Remove event listener
    document.removeEventListener('mouseout', this.closeDropdown);
  }

  /*
    Access ref of a child component
   */
  setRef(input) {
    this.dropdownMenu = input;
  }

  /**
   * Return if the mouse is on the tooltip.
   * @returns {boolean} true - mouse is on the tooltip
   */
  mouseOnDropdown() {
    const { open } = this.state;

    if (open && this.dropdownMenu) {
      /* old IE or Firefox work around */
      if (!this.dropdownMenu.matches) {
        /* old IE work around */
        if (this.dropdownMenu.msMatchesSelector) {
          this.dropdownMenu.matches = this.dropdownMenu.msMatchesSelector;
        } else {
          /* old Firefox work around */
          this.dropdownMenu.matches = this.dropdownMenu.mozMatchesSelector;
        }
      }
      return this.dropdownMenu.matches(':hover');
    }
    return false;
  }

  showDropdown() {
    if (this.isDropdownMounted) {
      this.setState({ open: true }, () => {
        document.addEventListener('mouseout', this.closeDropdown);
      });
    }
  }

  closeDropdown() {
    if (this.isDropdownMounted) {
      // Check if the mouse is actually over the dropdown, if so don't hide the dropdown
      if (this.mouseOnDropdown()) {
        return;
      }

      this.setState({ open: false }, () => {
        document.removeEventListener('mouseout', this.closeDropdown);
      });
    }
  }

  renderChildren = () => {
    const { children } = this.props;
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        open: this.state.open,
        setRef: this.setRef,
      });
    });
  };

  render() {
    const { name, link } = this.props;

    return (
      <Dropdown>
        <Link
          to={link}
          onMouseOver={this.showDropdown}
          onFocus={this.showDropdown}
          backgroundсolor={this.state.open ? '#e7e7e7' : 'transparent'}
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
};

NavbarDropdown.defaultProps = {
  name: '',
  link: '',
};

export default NavbarDropdown;
