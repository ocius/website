import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import ChevronLeft from '../Icons/ChevronLeft';
import ChevronRight from '../Icons/ChevronRight';

const Button = styled.button`
  position: absolute;
  background-color: gray;
  color: #ffffff;
  font-size: 1em;
  line-height: 0;
  top: 50%;
  padding: 5px;
  border-radius: 2px;
  transform: translate(0, -50%);
  cursor: pointer;
  border: none;
  z-index: 10;

  ${switchProp('direction', {
    Left: css`
      left: 0;
    `,

    Right: css`
      right: 0;
    `,
  })}
`;

function PaginatorButton({ direction, onClick }) {
  const icon = direction === 'Left' ? <ChevronLeft /> : <ChevronRight />;
  const label = direction === 'Left' ? 'Previous' : 'Next';

  return (
    <Button
      className="PaginatorButton"
      direction={direction}
      title={label}
      onClick={onClick}
      aria-label={label}
    >
      {icon}
    </Button>
  );
}

PaginatorButton.propTypes = {
  /**
   * Change the direction the arrow points
   */
  direction: PropTypes.oneOf(['Left', 'Right']).isRequired,
  /**
   * Function to run when the button is clicked
   */
  onClick: PropTypes.func,
};

PaginatorButton.defaultProps = {
  onClick: null,
};

export default PaginatorButton;
