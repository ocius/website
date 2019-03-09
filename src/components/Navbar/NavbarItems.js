import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import mq from '../../common/mq';

class NavbarItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: this.props.menuOpen ? this.props.menuOpen : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menuOpen !== this.state.menuOpen) {
      this.setState({ menuOpen: nextProps.menuOpen });
    }
  }

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
    const styles = {
      base: {
        margin: '0 0 0 auto',
        padding: '0',
        textAlign: 'right',
        listStyle: 'outside none none',
        [`@media (max-width: ${mq.max[768]})`]: {
          display: this.state.menuOpen ? 'block' : 'none',
          position: 'absolute',
          background: '#fff',
          top: '100%',
          left: '0',
          width: '100%',
          borderTop: '1px solid #001826',
          zIndex: 3
        }
      }
    };

    const { style } = this.props;
    return (
      <ul className="navitems" style={[styles.base, style && style]}>
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
