import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import mq from '../../common/mq';

const NavItems = styled.ul`
  margin: 0 0 0 auto;
  padding: 0;
  text-align: right;
  list-style: outside none none;

  @media (max-width: ${mq.max[768]}) {
    display: ${prop('display', 'none')};
    position: absolute;
    background: #fff;
    top: 100%;
    left: 0;
    width: 100%;
    border-top: 1px solid #001826;
    z-index: 3;
  }
`;

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
    return (
      <NavItems className="navitems" display={this.state.menuOpen ? 'block' : 'none'}>
        {this.renderChildren()}
      </NavItems>
    );
  }
}

NavbarItems.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavbarItems;
