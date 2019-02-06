import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import Radium from 'radium';

const styles = {
  header: {
    marginRight: '-15px',
    marginLeft: '-15px',
    boxSizing: 'border-box',

    '@media (min-width: 768px)': {
      float: 'left',
      marginRight: '0',
      marginLeft: '0'
    }
  },
  brand: {
    float: 'left',
    height: '50px',
    padding: '15px',
    lineHeight: '20px',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',

    fontSize: '18px',
    color: '#777',
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',

    ':hover': {
      color: '#5e5e5e'
    },

    ':focus': {
      color: '#5e5e5e'
    },

    '@media (min-width: 768px)': {
      marginLeft: '-15px'
    }
  },
  navbarToggle: {
    position: 'relative',
    float: 'right',
    padding: '9px 10px',
    marginTop: '8px',
    marginRight: '15px',
    marginBottom: '8px',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
    borderColor: '#ddd',
    cursor: 'pointer',
    boxSizing: 'border-box',

    ':hover': {
      backgroundColor: '#ddd'
    },

    ':focus': {
      outline: '0',
      backgroundColor: '#ddd'
    },
    '@media (min-width: 768px)': {
      display: 'none'
    }
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    borderWidth: '0',
    borderStyle: 'none',
    boxSizing: 'border-box'
  },
  iconBar: {
    display: 'block',
    width: '22px',
    height: '2px',
    borderRadius: '1px',
    backgroundColor: '#888',
    boxSizing: 'border-box'
  },
  burger: {
    marginTop: '4px'
  }
};

class NavbarHeader extends Component {
  renderToggleButton = () => {
    return (
      <button type="button" style={[styles.navbarToggle]} onClick={this.props.navbarToggle}>
        <span style={[styles.srOnly]}>Toggle navigation</span>
        <span style={[styles.iconBar]} />
        <span style={[styles.iconBar, styles.burger]} />
        <span style={[styles.iconBar, styles.burger]} />
      </button>
    );
  };

  render() {
    const { href, name, headerStyle } = this.props;
    const StyledLink = Radium(GatsbyLink);

    return (
      <div key="header" style={[styles.header, headerStyle && headerStyle]}>
        {this.renderToggleButton()}
        <StyledLink key="brand" to={href} style={styles.brand}>
          {name}
        </StyledLink>
      </div>
    );
  }
}

NavbarHeader.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  headerStyle: PropTypes.objectOf(PropTypes.object)
};

NavbarHeader.defaultProps = {
  href: '/',
  name: 'Ocius',
  headerStyle: {}
};

export default Radium(NavbarHeader);
