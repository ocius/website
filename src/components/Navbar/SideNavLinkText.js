import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkText = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.neutralPrimary};
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.1px;
  user-select: none;
`;

const SideNavLinkText = ({ children, ...rest }) => <LinkText {...rest}>{children}</LinkText>;

SideNavLinkText.propTypes = {
  /**
   * Provide the content for the link text
   */
  children: PropTypes.node.isRequired,
};

export default SideNavLinkText;
