/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import ChevronDownGlyph from '@carbon/icons-react/lib/chevron--down/index';
import { settings } from 'carbon-components';
import styled from 'styled-components';

const { prefix } = settings;

const TabsWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.6rem;
  letter-spacing: 0.16px;
  color: #161616;
  height: auto;
  width: 100%;
  position: relative;

  @media (min-width: 67.2rem) {
    background: none;
    min-height: 5rem;
  }
`;

const TabsUl = styled.ul`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  position: absolute;
  list-style: none;
  display: flex;
  flex-direction: column;
  z-index: 9100;
  background: #f4f4f4;
  transition: max-height 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  max-height: 600px;
  width: 100%;

  @media (min-width: 67.2rem) {
    flex-direction: row;
    background: none;
    box-shadow: none;
    z-index: auto;
    transition: inherit;
    width: auto;
  }

  &.bx--tabs__nav--hidden {
    transition: max-height 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
    overflow: hidden;
    max-height: 0;

    @media (min-width: 67.2rem) {
      display: flex;
      transition: inherit;
      overflow: visible;
      max-height: none;
    }
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
`;

const TabsTrigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;
  height: 4rem;
  cursor: pointer;
  color: #161616;
  outline: 2px solid transparent;
  border-bottom: 1px solid #8d8d8d;
  background-color: #f4f4f4;

  @media (min-width: 67.2rem) {
    display: none;
  }

  svg {
    width: 1.2rem;
    height: 0.7rem;
    fill: #161616;
    transition: transform 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  }
`;

const TabsTriggerText = styled.a`
  text-decoration: none;
  padding-top: 2px;
  color: #161616;
  font-weight: 400;
`;

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownHidden: true };
  }

  static getDerivedStateFromProps({ selected }, state) {
    const { prevSelected } = state;
    return prevSelected === selected
      ? null
      : {
          selected,
          prevSelected: selected
        };
  }

  getTabs() {
    return React.Children.map(this.props.children, tab => tab);
  }

  getTabAt = (index, useFresh) => {
    return (!useFresh && this[`tab${index}`]) || React.Children.toArray(this.props.children)[index];
  };

  setTabAt = (index, tabRef) => {
    this[`tab${index}`] = tabRef;
  };

  // following functions (handle*) are Props on Tab.js, see Tab.js for parameters
  handleTabClick = onSelectionChange => {
    return (index, label, evt) => {
      evt.preventDefault();
      this.selectTabAt(index, onSelectionChange);
      this.setState({
        dropdownHidden: true
      });
    };
  };

  handleTabKeyDown = onSelectionChange => {
    return (index, label, evt) => {
      const key = evt.key || evt.which;

      if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
        this.selectTabAt(index, onSelectionChange);
        this.setState({
          dropdownHidden: true
        });
      }
    };
  };

  handleTabAnchorFocus = onSelectionChange => {
    return index => {
      const tabCount = React.Children.count(this.props.children) - 1;
      let tabIndex = index;

      if (index < 0) {
        tabIndex = tabCount;
      } else if (index > tabCount) {
        tabIndex = 0;
      }

      const tab = this.getTabAt(tabIndex);

      if (tab) {
        this.selectTabAt(tabIndex, onSelectionChange);
        if (tab.tabAnchor) {
          tab.tabAnchor.focus();
        }
      }
    };
  };

  handleDropdownClick = () => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      dropdownHidden: !this.state.dropdownHidden
    });
  };

  selectTabAt = (index, onSelectionChange) => {
    if (this.state.selected !== index) {
      this.setState({
        selected: index
      });
      if (typeof onSelectionChange === 'function') {
        onSelectionChange(index);
      }
    }
  };

  render() {
    const {
      ariaLabel,
      iconDescription,
      className,
      triggerHref,
      role,
      onSelectionChange,
      tabContentClassName,
      ...other
    } = this.props;

    /**
     * The tab panel acts like a tab panel when the screen is wider, but acts
     * like a select list when the screen is narrow.  In the wide case we want
     * to allow the user to use the tab key to set the focus in the tab panel
     * and then use the left and right arrow keys to navigate the tabs.  In the
     * narrow case we want to use the tab key to select different options in
     * the list.
     *
     * We set the tab index based on the different states so the browser will treat
     * the whole tab panel as a single focus component when it looks like a tab
     * panel and separate components when it looks like a select list.
     */
    const tabsWithProps = this.getTabs().map((tab, index) => {
      const tabPanelIndex = index === this.state.selected ? 0 : -1;
      const tabIndex = !this.state.dropdownHidden ? 0 : tabPanelIndex;
      const newTab = React.cloneElement(tab, {
        index,
        selected: index === this.state.selected,
        handleTabClick: this.handleTabClick(onSelectionChange),
        handleTabAnchorFocus: this.handleTabAnchorFocus(onSelectionChange),
        tabIndex,
        ref: e => {
          this.setTabAt(index, e);
        },
        handleTabKeyDown: this.handleTabKeyDown(onSelectionChange)
      });

      return newTab;
    });

    const tabContentWithProps = React.Children.map(tabsWithProps, tab => {
      const { children, selected, renderContent: TabContent } = tab.props;

      return (
        <TabContent
          className={tabContentClassName}
          aria-hidden={!selected}
          hidden={!selected}
          selected={selected}
        >
          {children}
        </TabContent>
      );
    });

    const classes = {
      tabs: classNames(`${prefix}--tabs`, className),
      tablist: classNames(`${prefix}--tabs__nav`, {
        [`${prefix}--tabs__nav--hidden`]: this.state.dropdownHidden
      })
    };

    const selectedTab = this.getTabAt(this.state.selected, true);
    const selectedLabel = selectedTab ? selectedTab.props.label : '';

    return (
      <>
        <TabsWrapper {...other} className={classes.tabs} role={role}>
          <TabsTrigger
            role="listbox"
            aria-label={ariaLabel}
            tabIndex={0}
            className={`${prefix}--tabs-trigger`}
            onClick={this.handleDropdownClick}
            onKeyPress={this.handleDropdownClick}
          >
            <TabsTriggerText
              tabIndex={-1}
              className={`${prefix}--tabs-trigger-text`}
              href={triggerHref}
              onClick={this.handleDropdownClick}
            >
              {selectedLabel}
            </TabsTriggerText>
            <ChevronDownGlyph aria-hidden>
              {iconDescription && <title>{iconDescription}</title>}
            </ChevronDownGlyph>
          </TabsTrigger>
          <TabsUl role="tablist" className={classes.tablist}>
            {tabsWithProps}
          </TabsUl>
        </TabsWrapper>
        {tabContentWithProps}
      </>
    );
  }
}

Tabs.propTypes = {
  /**
   * Specify the text to be read by screen-readers when visiting the <Tabs>
   * component
   */
  ariaLabel: PropTypes.string,

  /**
   * Pass in a collection of <Tab> children to be rendered depending on the
   * currently selected tab
   */
  children: PropTypes.node,

  /**
   * Provide a className that is applied to the root <nav> component for the
   * <Tabs>
   */
  className: PropTypes.string,

  /**
   * Specify whether the Tab content is hidden
   */
  hidden: PropTypes.bool,

  /**
   * By default, this value is "navigation". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string,

  /**
   * Optionally provide an `onClick` handler that is invoked when a <Tab> is
   * clicked
   */
  onClick: PropTypes.func,

  /**
   * Optionally provide an `onKeyDown` handler that is invoked when keyed
   * navigation is triggered
   */
  onKeyDown: PropTypes.func,

  /**
   * Provide an optional handler that is called whenever the selection
   * changes. This method is called with the index of the tab that was
   * selected
   */
  onSelectionChange: PropTypes.func,

  /**
   * Provide a string that represents the `href` for the triggered <Tab>
   */
  triggerHref: PropTypes.string,

  /**
   * Optionally provide an index for the currently selected <Tab>
   */
  selected: PropTypes.number,

  /**
   * Provide a description that is read out when a user visits the caret icon
   * for the dropdown menu of items
   */
  iconDescription: PropTypes.string,

  /**
   * Provide a className that is applied to the <TabContent> components
   */
  tabContentClassName: PropTypes.string
};

Tabs.defaultProps = {
  children: '',
  className: '',
  iconDescription: 'show menu options',
  hidden: false,
  role: 'navigation',
  onClick: () => {},
  onKeyDown: () => {},
  onSelectionChange: () => {},
  triggerHref: '#',
  selected: 0,
  ariaLabel: 'listbox',
  tabContentClassName: ''
};
