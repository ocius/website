import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ChevronDownGlyph from '@carbon/icons-react/lib/chevron--down';

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 2rem 0 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  letter-spacing: 0.16px;
  color: #161616;
  height: auto;
  width: 100%;
  position: relative;
`;

const NavHidden = css`
  transition: max-height 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  overflow: hidden;
  max-height: 0;

  @media (min-width: 67.2rem) {
    display: flex;
    transition: inherit;
    overflow: visible;
    max-height: none;
  }
`;

const Nav = styled.ul`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 9100;
  background: #efefef;
  transition: max-height 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  max-height: 600px;
  width: 100%;

  @media (min-width: 67.2rem) {
    position: relative;
    flex-direction: row;
    background: none;
    box-shadow: none;
    z-index: auto;
    transition: inherit;
    width: auto;
  }

  ${props => props.hidden && NavHidden}
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

/*
    NavTabs is wrapper for tabs navigation.
*/

const NavTabs = ({
  children,
  iconDescription,
  ariaLabel,
  triggerHref,
  selected,
  onSelectionChange
}) => {
  const [dropdownHidden, setDropdownHidden] = useState(true);
  const [selectedDropdown, setSelectedDropdown] = useState(selected);
  const tabIndexes = [];

  const handleDropdownClick = () => {
    setDropdownHidden(!dropdownHidden);
  };

  const selectTabAt = (index, selectionChangeHandler) => {
    if (selectedDropdown !== index) {
      setSelectedDropdown(index);
      if (typeof selectionChangeHandler === 'function') {
        selectionChangeHandler(index);
      }
    }
  };

  const getTabs = () => {
    return React.Children.map(children, tab => tab);
  };

  const getTabAt = (index, useFresh) => {
    return (!useFresh && tabIndexes[`tab${index}`]) || React.Children.toArray(children)[index];
  };

  const setTabAt = (index, tabRef) => {
    tabIndexes[`tab${index}`] = tabRef;
  };

  // following functions (handle*) are Props on Tab.js, see Tab.js for parameters
  const handleTabClick = selectionChangeHandler => {
    return (index, label, evt) => {
      evt.preventDefault();
      selectTabAt(index, selectionChangeHandler);
      setDropdownHidden(true);
    };
  };

  const handleTabKeyDown = selectionChangeHandler => {
    return (index, label, evt) => {
      const key = evt.key || evt.which;

      if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
        selectTabAt(index, selectionChangeHandler);
        setDropdownHidden(true);
      }
    };
  };

  const handleTabAnchorFocus = selectionChangeHandler => {
    return index => {
      const tabCount = React.Children.count(children) - 1;
      let tabIndex = index;

      if (index < 0) {
        tabIndex = tabCount;
      } else if (index > tabCount) {
        tabIndex = 0;
      }

      const tab = getTabAt(tabIndex);

      if (tab) {
        selectTabAt(tabIndex, selectionChangeHandler);
        if (tab.tabAnchor) {
          tab.tabAnchor.focus();
        }
      }
    };
  };

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
  const tabsWithProps = getTabs().map((tab, index) => {
    const tabPanelIndex = index === selectedDropdown ? 0 : -1;
    const tabIndex = !dropdownHidden ? 0 : tabPanelIndex;
    return React.cloneElement(tab, {
      index,
      selected: index === selectedDropdown,
      handleTabClick: handleTabClick(onSelectionChange),
      handleTabAnchorFocus: handleTabAnchorFocus(onSelectionChange),
      tabIndex,
      ref: e => {
        setTabAt(index, e);
      },
      handleTabKeyDown: handleTabKeyDown(onSelectionChange)
    });
  });

  const selectedTab = getTabAt(selectedDropdown, true);
  const selectedLabel = selectedTab ? selectedTab.props.label : '';

  return (
    <Wrapper role="navigation">
      <TabsTrigger
        role="listbox"
        aria-label={ariaLabel}
        tabIndex={0}
        onClick={handleDropdownClick}
        onKeyPress={handleDropdownClick}
      >
        <TabsTriggerText tabIndex={-1} href={triggerHref} onClick={handleDropdownClick}>
          {selectedLabel}
        </TabsTriggerText>
        <ChevronDownGlyph aria-hidden>
          {iconDescription && <title>{iconDescription}</title>}
        </ChevronDownGlyph>
      </TabsTrigger>
      <Nav hidden={dropdownHidden} role="tablist">
        {tabsWithProps}
      </Nav>
    </Wrapper>
  );
};

NavTabs.propTypes = {
  /**
   * Provide a description that is read out when a user visits the caret icon
   * for the dropdown menu of items
   */
  iconDescription: PropTypes.string,

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
   * Provide a string that represents the `href` for the triggered <Tab>
   */
  triggerHref: PropTypes.string,

  /**
   * Optionally provide an index for the currently selected <Tab>
   */
  selected: PropTypes.number,

  /**
   * Provide an optional handler that is called whenever the selection
   * changes. This method is called with the index of the tab that was
   * selected
   */
  onSelectionChange: PropTypes.func
};

NavTabs.defaultProps = {
  ariaLabel: 'listbox',
  iconDescription: 'show menu options',
  triggerHref: '#',
  selected: 0,
  onSelectionChange: () => {},
  children: ''
};

export default NavTabs;
