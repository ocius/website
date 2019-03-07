import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import cn from 'classnames';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
`;

const GridRow = ({ children, className, id, alignItems, style }) => (
  <StyledFooter
    className={`${cn(className, 'GridRow')}`}
    alignItems={alignItems}
    id={id}
    style={style}
  >
    {children}
  </StyledFooter>
);

GridRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object]),
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch'])
};

GridRow.defaultProps = {
  className: null,
  id: null,
  style: null,
  alignItems: null
};

export default GridRow;
