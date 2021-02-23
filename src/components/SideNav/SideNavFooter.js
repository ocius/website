import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const NavFooter = styled.footer`
  flex: 0 0 4.8rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bgPrimary};
`;

const ButtonToggle = styled.button`
  outline: 2px solid transparent;
  outline-offset: -2px;
  box-sizing: border-box;
  margin: 0;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  display: inline-block;
  background: none;
  border: 0;
  cursor: pointer;
  appearance: none;
  width: 100%;
  height: 100%;
  padding: 0 0 0 1.6rem;
  text-align: left;
  transition: outline 0.11s;

  :focus {
    outline: 2px solid ${(props) => props.theme.colors.themePrimary};
    outline-offset: -2px;
  }

  @media screen and (prefers-contrast) {
    :focus {
      outline-style: dotted;
    }
  }
`;

const NavIcon = styled.div`
  display: flex;
  flex: 0 0 1.6rem;
  align-items: center;
  justify-content: center;
  margin-right: 2.4rem;

  > svg {
    width: 1.6rem;
    height: 1.6rem;
    fill: #525252;
  }
`;

const AssistiveText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  visibility: inherit;
  clip: rect(0, 0, 0, 0);
`;

/**
 * SideNavFooter is used for rendering the button at the bottom of the side
 * navigation that is a part of the UI Shell. It is responsible for handling the
 * user interaction to expand or collapse the side navigation.
 */
const SideNavFooter = ({ assistiveText, className, expanded, onToggle }) => (
  <NavFooter className={className}>
    <ButtonToggle type="button" onClick={(evt) => onToggle(evt)} title={assistiveText}>
      <NavIcon>{expanded ? <Icon.Close20 /> : <Icon.ChevronRight />}</NavIcon>
      <AssistiveText>{assistiveText}</AssistiveText>
    </ButtonToggle>
  </NavFooter>
);

SideNavFooter.propTypes = {
  /**
   * Provide text to be read to screen readers and shown as a tooltip when
   * interacting with the toggle button in the footer
   */
  assistiveText: PropTypes.string,

  /**
   * Specify whether the side navigation is expanded or collapsed
   */
  expanded: PropTypes.bool.isRequired,

  /**
   * Provide a function that is called when the toggle button is interacted
   * with. Useful for controlling the expansion state of the side navigation.
   */
  onToggle: PropTypes.func.isRequired,
};

SideNavFooter.defaultProps = {
  assistiveText: 'Toggle opening or closing the side navigation',
};

export default SideNavFooter;
