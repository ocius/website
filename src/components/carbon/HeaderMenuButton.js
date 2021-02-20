import styled, { css } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import mq from '../../common/mq';

const ActiveStyle = css`
  border-left: 0.2rem solid rgba(14, 190, 255, 0.4);
  border-right: 0.2rem solid rgba(14, 190, 255, 0.4);
  border-bottom: 0.2rem solid rgba(14, 190, 255, 0.4);
`;

const MenuButton = styled.button`
  box-sizing: border-box;
  margin-right: -0.8rem;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  display: inline-block;
  background: none;
  appearance: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  width: 100%;
  width: 5rem;
  height: 5rem;
  border: 0.2rem solid transparent;
  transition: background-color 110ms, border-color 110ms;

  &:focus {
    border-color: #ffffff;
    outline: none;
  }

  > *,
  > ::before,
  > ::after {
    box-sizing: inherit;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  > svg {
    fill: #171717;
  }

  @media (min-width: ${mq.min[768]}) {
    display: none;
  }

  ${(props) => props.isActive && ActiveStyle}
`;

const HeaderMenuButton = ({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  onClick,
  isActive,
  ...rest
}) => {
  const accessibilityLabel = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
  };
  return (
    <MenuButton
      {...rest}
      {...accessibilityLabel}
      title={ariaLabel}
      type="button"
      onClick={onClick}
      isActive={isActive ? 1 : undefined}
    >
      {isActive ? (
        <Icon.Close20
          style={{
            height: 20,
            width: 20,
            marginBottom: '5px',
          }}
        />
      ) : (
        <Icon.Sliders
          style={{
            marginBottom: '5px',
          }}
        />
      )}
    </MenuButton>
  );
};

HeaderMenuButton.propTypes = {
  /**
   * Required props for accessibility label on the underlying menu button
   */
  'aria-label': PropTypes.string,
  'aria-labelledby': PropTypes.string,

  /**
   * Optionally provide an onClick handler that is called when the underlying
   * button fires it's onclick event
   */
  onClick: PropTypes.func,

  /**
   * Specify whether the action is currently active
   */
  isActive: PropTypes.bool,
};

HeaderMenuButton.defaultProps = {
  'aria-label': '',
  'aria-labelledby': '',
  onClick: null,
  isActive: false,
};

export default HeaderMenuButton;
