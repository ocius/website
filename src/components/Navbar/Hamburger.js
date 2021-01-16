import React from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  font: inherit;
  display: inline-block;
  overflow: visible;
  margin: 0 5px;
  padding: 8px 8px 3px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
`;

const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 24px;
`;

const HamburgerInner = styled.div`
  display: block;
  margin-top: -2px;
  position: absolute;
  width: 35px;
  height: 4px;
  border-radius: 4px;
  background-color: #4ab4e6;
  top: 2px;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-duration: 0.275s;
  transition-property: transform;

  &:before,
  &:after {
    position: absolute;
    display: block;
    content: '';
    width: 35px;
    height: 4px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
    background-color: #4ab4e6;
  }

  &:before {
    top: 10px;
    transition: opacity 0.125s ease 0.275s;
  }

  &:after {
    top: 20px;
    bottom: -10px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;

const Hamburger = () => (
  <HamburgerWrapper>
    <HamburgerBox>
      <HamburgerInner />
    </HamburgerBox>
  </HamburgerWrapper>
);

export default Hamburger;
