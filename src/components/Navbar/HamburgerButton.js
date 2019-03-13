import React, { Component } from 'react';
import styled from 'styled-components';
import mq from '../../common/mq';

const NavbarToggle = styled.button`
  position: relative;
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  margin-left: auto;
  background-color: transparent;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: #ddd;
  cursor: pointer;
  box-sizing: border-box;

  :hover {
    background-color: #ddd;
  }

  :focus {
    outline: 0;
    background-color: #ddd;
  }

  @media (min-width: ${mq.min[768]}) {
    display: none;
  }
`;

// For accessibility purposes only, add visually hidden text
const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border-width: 0;
  border-style: none;
  box-sizing: border-box;
`;

const IconBar = styled.span`
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  background-color: #888;
  box-sizing: border-box;

  & + & {
    margin-top: 4px;
  }
`;

class HamburgerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    return (
      <NavbarToggle
        type="button"
        onClick={
          this.props.handleClick
            ? this.props.handleClick
            : () => {
                this.handleClick();
              }
        }
      >
        <SrOnly>Toggle navigation</SrOnly>
        <IconBar />
        <IconBar />
        <IconBar />
      </NavbarToggle>
    );
  }
}

export default HamburgerButton;
