import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  navbar: {
    backgroundColor: '#efefef',
    margin: '0px',
    width: '100%',
    zIndex: '1',
    top: '0px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  },
  container: {
    width: '960px',
    margin: '0 auto',
    position: 'relative',
    marginTop: '-10px',

    '@media (max-width: 767px)': {
      width: '100%'
    },
    '@media (min-width: 768px)': {
      width: '768px'
    },
    '@media (min-width: 992px)': {
      width: '970px'
    },
    '@media (min-width: 1200px)': {
      width: '1140px'
    }
  },
  clear: {
    clear: 'both'
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
      <header className="primary" style={[styles.navbar, navStyle && navStyle]}>
        <div className="container" style={[styles.container, contStyle && contStyle]}>
          {this.renderChildren()}
        </div>
        <div className="clear" style={[styles.clear]} />
      </header>
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
