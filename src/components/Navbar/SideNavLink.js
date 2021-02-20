import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import SideNavIcon from './SideNavIcon';
import SideNavItem from './SideNavItem';
import SideNavLinkText from './SideNavLinkText';

const SideNavLink = React.forwardRef(
  (
    {
      className,
      children,
      renderIcon: IconElement,
      // eslint-disable-next-line no-unused-vars
      isSideNavExpanded,
      ...rest
    },
    ref
  ) => (
    <SideNavItem>
      <Link {...rest} className={className} ref={ref}>
        {IconElement && (
          <SideNavIcon>
            <IconElement />
          </SideNavIcon>
        )}
        <SideNavLinkText>{children}</SideNavLinkText>
      </Link>
    </SideNavItem>
  )
);

SideNavLink.propTypes = {
  /**
   * Specify the text content for the link
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Property to indicate if the side nav container is open (or not). Use to
   * keep local state and styling in step with the SideNav expansion state.
   */
  isSideNavExpanded: PropTypes.bool,

  /**
   * Provide an icon to render in the side navigation link. Should be a React class.
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

SideNavLink.defaultProps = {
  className: null,
  isSideNavExpanded: false,
  renderIcon: null,
};

export default SideNavLink;
