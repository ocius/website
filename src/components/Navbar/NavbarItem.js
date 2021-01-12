import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import detectActive from '../../common/detectActive';

const Item = styled.li`
  position: relative;
  display: inline-block;
  list-style: none;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.4;
`;

const LinkStyles = css`
  display: inline-block;
  padding: 1em;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 100%;
  text-decoration: none;
  color: #001826;

  :hover {
    text-decoration: none;
  }

  ${Item}:hover & {
    color: #60d2f6;
    background-color: #ffffff;
  }

  &[data-active] {
    background-color: #f7f7f7;
  }
`;

const InternalLink = styled(GatsbyLink)`
  ${LinkStyles}
`;

const ExternalLink = styled.a`
  ${LinkStyles}
`;

const NavbarItem = ({ link, title, blank }) => (
  <Item className="list">
    {(() => {
      // Check if the link should be opened in the new tab
      if (blank) {
        return (
          <ExternalLink className="link" href={link} target="_blank" rel="noreferrer noopener">
            {title}
          </ExternalLink>
        );
      }

      return (
        <InternalLink className="link" to={link} getProps={detectActive}>
          {title}
        </InternalLink>
      );
    })()}
  </Item>
);

NavbarItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  blank: PropTypes.bool,
};

NavbarItem.defaultProps = {
  blank: false,
};

export default NavbarItem;
