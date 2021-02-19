import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isExternalURL from '../common/detectExternalURL';

/**
 * Since DOM elements <a> cannot receive activeClassName
 * and partiallyActive, destructure the prop here and
 * pass it only to GatsbyLink
 */
const DynamicLink = ({ children, to, activeClassName, partiallyActive, getProps, ...other }) => {
  // Use Gatsby Link for internal links, and <a> for others
  if (isExternalURL(to)) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        getProps={getProps}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
};

export default DynamicLink;
