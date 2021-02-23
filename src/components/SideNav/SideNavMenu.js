import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import match from '../../common/keyboard/match';
import keys from '../../common/keyboard/keys';
import SideNavIcon from './SideNavIcon';
import Icon from '../Icon';

const SubmenuButton = styled.button`
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
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: 0.16px;
  outline: 2px solid transparent;
  outline-offset: -2px;
  display: flex;
  align-items: center;
  height: 3.2rem;
  padding: 0 1.6rem;
  color: ${(props) => props.theme.colors.neutralPrimary};
  transition: color 0.11s, background-color 0.11s, outline 0.11s;
  user-select: none;

  :hover {
    color: ${(props) => props.theme.colors.themeDark};
    background-color: ${(props) => props.theme.colors.neutralLight};
  }

  :focus {
    outline: 2px solid ${(props) => props.theme.colors.themePrimary};
    outline-offset: -2px;
  }

  ${(props) =>
    props.$active &&
    css`
      &[aria-expanded='false'] {
        position: relative;
        color: ${props.theme.colors.themeDark};
        background-color: ${props.theme.colors.neutralLight};

        :before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 4px;
          background-color: ${props.theme.colors.themePrimary};
          content: '';
        }
      }
    `}
`;

const SubmenuTitle = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
`;

const NavMenu = styled.ul`
  display: block;
  max-height: 0;
  visibility: hidden;
  list-style: none;
  margin: 0;
  padding: 0;

  ${SubmenuButton}[aria-expanded='true'] + & {
    max-height: 150rem;
    visibility: inherit;
  }
`;

class SideNavMenu extends React.Component {
  static getDerivedStateFromProps = (props, state) => {
    let derivedState = null;

    if (props.isSideNavExpanded === false && state.isExpanded === true) {
      derivedState = {
        isExpanded: props.isSideNavExpanded,
        wasPreviouslyExpanded: true,
      };
    } else if (props.isSideNavExpanded === true && state.wasPreviouslyExpanded === true) {
      derivedState = {
        isExpanded: props.isSideNavExpanded,
        wasPreviouslyExpanded: false,
      };
    }

    return derivedState;
  };

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: props.defaultExpanded || false,
      // eslint-disable-next-line react/no-unused-state
      wasPreviouslyExpanded: props.defaultExpanded || false,
    };
  }

  handleToggleExpand = () => {
    this.setState((state) => ({ isExpanded: !state.isExpanded }));
  };

  handleKeyDown = (event) => {
    if (match(event, keys.Escape)) {
      this.setState(() => ({ isExpanded: false }));
    }
  };

  render() {
    const { buttonRef, className, children, renderIcon: IconElement, isActive, title } = this.props;
    const { isExpanded } = this.state;

    let hasActiveChild;
    if (children) {
      // if we have children, either a single or multiple, find if it is active
      hasActiveChild = Array.isArray(children)
        ? children.some((child) => {
            if (child.props && (child.props.isActive === true || child.props['aria-current'])) {
              return true;
            }
            return false;
          })
        : children.props && (children.props.isActive === true || children.props['aria-current']);
    }

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li className={className} onKeyDown={this.handleKeyDown}>
        <SubmenuButton
          $active={isActive || (hasActiveChild && !isExpanded)}
          aria-expanded={isExpanded}
          onClick={this.handleToggleExpand}
          ref={buttonRef}
          type="button"
        >
          {IconElement && (
            <SideNavIcon>
              <IconElement />
            </SideNavIcon>
          )}
          <SubmenuTitle>{title}</SubmenuTitle>
          <SideNavIcon>
            <Icon.ChevronDownGlyph
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
              style={{ width: '0.7em', height: '0.7em' }}
            />
          </SideNavIcon>
        </SubmenuButton>
        <NavMenu>{children}</NavMenu>
      </li>
    );
  }
}

SideNavMenu.propTypes = {
  /**
   * Provide <SideNavMenuItem>'s inside of the `SideNavMenu`
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Specify whether the menu should default to expanded. By default, it will
   * be closed.
   */
  defaultExpanded: PropTypes.bool,

  /**
   * Specify whether the `SideNavMenu` is "active". `SideNavMenu` should be
   * considered active if one of its menu items are a link for the current
   * page.
   */
  isActive: PropTypes.bool,

  /**
   * Property to indicate if the side nav container is open (or not). Use to
   * keep local state and styling in step with the SideNav expansion state.
   */
  isSideNavExpanded: PropTypes.bool,

  /**
   * Pass in a custom icon to render next to the `SideNavMenu` title
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Provide the text for the overall menu name
   */
  title: PropTypes.string.isRequired,
};

SideNavMenu.defaultProps = {
  defaultExpanded: false,
  isActive: false,
  className: null,
  renderIcon: null,
  isSideNavExpanded: null,
};

export default SideNavMenu;
