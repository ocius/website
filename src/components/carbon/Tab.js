/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { settings } from 'carbon-components';
import styled from 'styled-components';
import TabContent from './TabContent';

const { prefix } = settings;

const NavTabsItem = styled.li`
  box-sizing: border-box;
  margin: 0;
  border: 0;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  background-color: #f4f4f4;
  display: flex;
  padding: 0;
  cursor: pointer;
  width: 100%;
  height: 4rem;
  transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);

  & + .bx--tabs__nav-item {
    margin-left: 0.32rem;
  }

  &.bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) {
    border: none;
    display: none;
    transition: color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  }

  .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--disabled) {
    background-color: #e5e5e5;
    box-shadow: 0 -1px 0 #e5e5e5;

    @media (min-width: 67.2rem) {
      background-color: transparent;
      box-shadow: none;
    }
  }

  @media (min-width: 67.2rem) {
    background: transparent;
    height: auto;

    &.bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) {
      display: flex;

      .bx--tabs__nav-link {
        color: #161616;
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 1.8rem;
        letter-spacing: 0.16px;
        border-bottom: 3px solid #125192;
      }
    }
  }
`;

const TabsNavLink = styled.a`
  outline: 2px solid transparent;
  outline-offset: -2px;
  display: inline-block;
  color: #393939;
  text-decoration: none;
  font-weight: 400;
  padding: 1.2rem 0;
  width: calc(100% - 32px);
  height: 5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 1.6rem;
  line-height: 1.8rem;
  border-bottom: 1px solid #e0e0e0;
  overflow: hidden;
  transition: border 70ms cubic-bezier(0.2, 0, 0.38, 0.9),
    outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9);

  &:active,
  &:focus {
    outline: 2px solid #125192;
    outline-offset: -2px;
  }

  @media (min-width: 67.2rem) {
    border-bottom: 3px solid #e0e0e0;
    padding: 0.8rem 1.6rem;
    width: 20rem;
    margin: 0;
    line-height: inherit;
  }
`;

export default class Tab extends React.Component {
  setTabFocus(evt) {
    const leftKey = 37;
    const rightKey = 39;
    if (evt.which === leftKey) {
      this.props.handleTabAnchorFocus(this.props.index - 1);
    } else if (evt.which === rightKey) {
      this.props.handleTabAnchorFocus(this.props.index + 1);
    } else {
    }
  }

  render() {
    const {
      className,
      handleTabClick,
      handleTabAnchorFocus, // eslint-disable-line
      handleTabKeyDown,
      disabled,
      href,
      index,
      label,
      selected,
      tabIndex,
      onClick,
      onKeyDown,
      renderAnchor,
      renderContent, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const classes = classNames(className, `${prefix}--tabs__nav-item`, {
      [`${prefix}--tabs__nav-item--disabled`]: disabled,
      [`${prefix}--tabs__nav-item--selected`]: selected
    });

    const anchorProps = {
      className: `${prefix}--tabs__nav-link`,
      href,
      role: 'tab',
      tabIndex,
      'aria-selected': selected,
      ref: e => {
        this.tabAnchor = e;
      }
    };

    return (
      <NavTabsItem
        {...other}
        tabIndex={-1}
        className={classes}
        onClick={evt => {
          handleTabClick(index, label, evt);
          onClick(evt);
        }}
        onKeyDown={evt => {
          this.setTabFocus(evt);
          handleTabKeyDown(index, label, evt);
          onKeyDown(evt);
        }}
        role="presentation"
        selected={selected}
      >
        <TabsNavLink {...anchorProps}>{label}</TabsNavLink>
      </NavTabsItem>
    );
  }
}

Tab.propTypes = {
  /**
   * Specify an optional className to be added to your Tab
   */
  className: PropTypes.string,

  /**
   * A handler that is invoked when a user clicks on the control.
   * Reserved for usage in Tabs
   */
  handleTabClick: PropTypes.func,

  /**
   * A handler that is invoked when a user presses left/right key.
   * Reserved for usage in Tabs
   */
  handleTabAnchorFocus: PropTypes.func,

  /**
   * A handler that is invoked on the key down event for the control.
   * Reserved for usage in Tabs
   */
  handleTabKeyDown: PropTypes.func,

  /**
   * Whether your Tab is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Provide a string that represents the `href` of the Tab
   */
  href: PropTypes.string,

  /**
   * The index of your Tab in your Tabs. Reserved for usage in Tabs
   */
  index: PropTypes.number,

  /**
   * Provide the contents of your Tab
   */
  label: PropTypes.node,

  /**
   * Provide an accessibility role for your Tab
   */
  role: PropTypes.string,

  /**
   * Provide a handler that is invoked when a user clicks on the control
   */
  onClick: PropTypes.func,

  /**
   * Provide a handler that is invoked on the key down event for the control
   */
  onKeyDown: PropTypes.func,

  /**
   * Whether your Tab is selected.
   * Reserved for usage in Tabs
   */
  selected: PropTypes.bool,

  /**
   * Specify the tab index of the <a> node
   */
  tabIndex: PropTypes.number,

  /*
   * An optional parameter to allow overriding the anchor rendering.
   * Useful for using Tab along with react-router or other client
   * side router libraries.
   * */
  renderAnchor: PropTypes.func,

  /*
   * An optional parameter to allow overriding the content rendering.
   * */
  renderContent: PropTypes.func
};

Tab.defaultProps = {
  className: '',
  handleTabClick: () => {},
  handleTabAnchorFocus: () => {},
  handleTabKeyDown: () => {},
  index: 0,
  disabled: false,
  role: 'presentation',
  label: 'provide a label',
  tabIndex: 0,
  href: '#',
  selected: false,
  renderContent: TabContent,
  onClick: () => {},
  onKeyDown: () => {},
  renderAnchor: () => {}
};
