import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';

const StyledNavbar = styled.header`
  background-color: #efefef;
  margin: 0px;
  width: 100%;
  z-index: 1;
  top: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  }

  renderChildren() {
    const { children } = this.props;
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        handleClick: this.handleMenuClick,
        menuOpen: this.state.menuOpen
      });
    });
  }

  render() {
    const { navStyle } = this.props;
    return (
      <StyledNavbar className="primary" style={navStyle}>
        <FlexContainer>{this.renderChildren()}</FlexContainer>
      </StyledNavbar>
    );
  }
}

Navbar.propTypes = {
  navStyle: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.node.isRequired
};

Navbar.defaultProps = {
  navStyle: {}
};

export default Navbar;
