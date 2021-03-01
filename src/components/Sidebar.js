import React from 'react';
import PropTypes from 'prop-types';
import RecentNews from './RecentNews';
import SidebarWidget from './SidebarWidget';

/**
 * Dummy component, contains sidebar content. This way, we don't have to copy-and-paste content
 * on all the pages.
 */
const Sidebar = ({ children }) => children;

Sidebar.propTypes = {
  children: PropTypes.node,
};

Sidebar.defaultProps = {
  children: (
    <SidebarWidget className="recent-news">
      <RecentNews />
    </SidebarWidget>
  ),
};

export default Sidebar;
