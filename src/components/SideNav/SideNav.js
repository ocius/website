import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SideNavFooter from './SideNavFooter';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  top: 5rem;
  bottom: 0;
  left: 0;
  z-index: 6000;
  width: 28rem;
  max-width: 28rem;
  overflow-x: hidden;
  overflow-y: auto;
  color: #565656;
  background-color: #ffffff;
  transition: width 0.11s cubic-bezier(0.2, 0, 1, 0.9);
  will-change: width;
  padding: 1.6rem 0 0;

  ${(props) =>
    !props.$expanded &&
    css`
      @media (max-width: 100rem) {
        width: 0;
      }
    `}
`;

const SideNav = React.forwardRef((props, ref) => {
  const {
    expanded: expandedProp,
    defaultExpanded,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    children,
    onToggle,
    className,
  } = props;
  const { current: controlled } = useRef(expandedProp !== undefined);
  const [expandedState, setExpandedState] = useState(defaultExpanded);
  const expanded = controlled ? expandedProp : expandedState;

  const handleToggle = (event, value = !expanded) => {
    if (!controlled) {
      setExpandedState(value);
    }
    if (onToggle) {
      onToggle(event, value);
    }
  };

  const accessibilityLabel = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
  };

  const assistiveText = expanded ? 'Close' : 'Open';

  return (
    <Nav
      ref={ref}
      className={className}
      {...accessibilityLabel}
      $expanded={expanded}
      onFocus={(event) => handleToggle(event, true)}
      onBlur={(event) => handleToggle(event, false)}
    >
      {children}
      <SideNavFooter assistiveText={assistiveText} expanded={expanded} onToggle={handleToggle} />
    </Nav>
  );
});

SideNav.propTypes = {
  /**
   * If `true`, the SideNav will be expanded, otherwise it will be collapsed.
   * Using this prop causes SideNav to become a controled component.
   */
  expanded: PropTypes.bool,

  /**
   * If `true`, the SideNav will be open on initial render.
   */
  defaultExpanded: PropTypes.bool,

  /**
   * An optional listener that is called when an event that would cause
   * toggling the SideNav occurs.
   *
   * @param {object} event
   * @param {boolean} value
   */
  onToggle: PropTypes.func,

  /**
   * Optionally provide props for accessibility label on the underlying menu
   */
  'aria-label': PropTypes.string,
  'aria-labelledby': PropTypes.string,

  /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  className: PropTypes.string,
};

SideNav.defaultProps = {
  className: '',
  defaultExpanded: false,
  onToggle: null,
  expanded: false,
  'aria-label': '',
  'aria-labelledby': '',
};

export default SideNav;
