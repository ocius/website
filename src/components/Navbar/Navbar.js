import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Container from '../Container';

const styles = {
  navbar: {
    backgroundColor: '#efefef',
    margin: '0px',
    width: '100%',
    zIndex: '1',
    top: '0px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  },
  clear: {
    clear: 'both'
  }
};

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
      <header className="primary" style={[styles.navbar, navStyle && navStyle]}>
        <Container>{this.renderChildren()}</Container>
        <div className="clear" style={[styles.clear]} />
      </header>
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

export default Radium(Navbar);
