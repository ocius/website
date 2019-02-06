import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  navbar: {
    backgroundColor: '#f8f8f8',
    border: '1px solid #e7e7e7',
    borderRadius: '0px',
    position: 'relative',
    top: '0px',
    minHeight: '50px',
    marginBottom: '20px',
    display: 'block',
    boxSizing: 'border-box'
  },
  container: {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    boxSizing: 'border-box',

    '@media (min-width: 768px)': {
      width: '750px'
    },
    '@media (min-width: 992px)': {
      width: '970px'
    },
    '@media (min-width: 1200px)': {
      width: '1170px'
    }
  }
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseIn: false
    };
  }

  navbarToggle() {
    this.setState(prevState => ({ collapseIn: !prevState.collapseIn }));
  }

  renderChildren() {
    const { children } = this.props;
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        navbarToggle: this.navbarToggle,
        collapseIn: this.state.collapseIn
      });
    });
  }

  render() {
    const { navStyle, contStyle } = this.props;
    return (
      <nav className="navbar" style={[styles.navbar, navStyle && navStyle]}>
        <div className="container" style={[styles.container, contStyle && contStyle]}>
          {this.renderChildren()}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  navStyle: PropTypes.objectOf(PropTypes.object),
  contStyle: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.node.isRequired
};

Navbar.defaultProps = {
  navStyle: {},
  contStyle: {}
};

export default Radium(Navbar);
