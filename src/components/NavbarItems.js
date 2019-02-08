import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  base: {
    margin: '0',
    textAlign: 'right',
    listStyle: 'outside none none',
    padding: '0',
    '@media (max-width: 767px)': {
      display: 'none',
      position: 'inherit',
      background: '#fff',
      top: '81px',
      borderTop: '1px solid #001826'
    }
  }
};

class NavbarItems extends Component {
  getStyles = () => {
    if (this.props.collapseIn) {
      styles.collapse.display = 'block';
      styles.collapse.overflowY = 'auto';
    }
    return styles;
  };

  onClickHandler = activeIndex => {
    this.setState({
      activeIndex
    });
  };

  renderChildren = () => {
    const { children } = this.props;
    const { activeIndex } = this.state;
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        index,
        activeIndex,
        parentCallBack: this.onClickHandler
      });
    });
  };

  render() {
    const defStyle = this.getStyles();
    const { style } = this.props;
    return (
      <ul className="navitems" style={[defStyle.base, style && style]}>
        {this.renderChildren()}
      </ul>
    );
  }
}

NavbarItems.propTypes = {
  style: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.node.isRequired
};

NavbarItems.defaultProps = {
  style: {}
};

export default Radium(NavbarItems);
