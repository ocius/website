import styled, { css } from 'styled-components';
import Dropdown from 'carbon-components-react/lib/components/Dropdown';

const StyledDropdown = styled(Dropdown)`
  outline: 2px solid transparent;
  outline-offset: -2px;
  position: relative;
  list-style: none;
  display: block;
  background-color: #f3f3f3;
  border: none;
  border-bottom: 1px solid #8c8c8c;
  width: 100%;
  height: 4rem;
  cursor: pointer;
  color: #171717;
  transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);

  ${props =>
    props.type === 'inline' &&
    css`
      justify-self: start;
      display: inline-block;
      border-bottom-color: transparent;
      width: auto;
      height: 3.2rem;
      border-width: 0;
      background-color: #ffffff;
      transition: background 70ms cubic-bezier(0, 0, 0.38, 0.9);
    `}

  &:hover {
    background-color: #e5e5e5;
  }

  .bx--list-box__field {
    display: inline-block;
    background: none;
    appearance: none;
    border: 0;
    padding: 0;
    cursor: pointer;
    width: 100%;
    position: relative;
    display: inline-flex;
    align-items: center;
    vertical-align: top;
    height: 4rem;
    padding: 0 4.8rem 0 1.6rem;
    cursor: pointer;
    outline: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${props =>
      props.type === 'inline' &&
      css`
        padding: 0 3.2rem 0 0.8rem;
        height: 3.2rem;
      `}

    &:focus {
      outline-color: rgba(14,190,255,.4);
      outline-style: auto;
      outline-width: 4px;
    }
  }

  .bx--list-box__label {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: 0.16px;
    color: #171717;
    user-select: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .bx--list-box__menu-icon {
    position: absolute;
    right: 1.6rem;
    height: 100%;
    transition: transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),
      -webkit-transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
    cursor: pointer;

    ${props =>
      props.type === 'inline' &&
      css`
        right: 0.8rem;
      `}

    > svg {
      fill: #171717;
      height: 100%;
    }
  }

  .bx--list-box__menu-icon--open {
    transform: rotate(180deg);
  }

  .bx--list-box__menu {
    box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #f3f3f3;
    max-height: 14rem;
    overflow-y: auto;
    z-index: 9100;
  }

  .bx--list-box__menu-item {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: 0.16px;
    height: 4rem;
    color: #565656;
    cursor: pointer;
    user-select: none;
    position: relative;

    &--highlighted {
      background-color: #e5e5e5;
      color: #171717;
      border-color: transparent;
    }

    &:hover {
      background-color: #e5e5e5;

      .bx--list-box__menu-item__option {
        color: #171717;
      }
    }

    &:first-of-type .bx--list-box__menu-item__option {
      border-top-color: transparent;
    }
  }

  .bx--list-box__menu-item--highlighted .bx--list-box__menu-item__option {
    color: #171717;
  }

  .bx--list-box__menu-item__option {
    outline: 2px solid transparent;
    outline-offset: -2px;
    display: block;
    height: 4rem;
    color: #565656;
    text-decoration: none;
    font-weight: normal;
    line-height: 1.6rem;
    padding: 1.1rem 0;
    margin: 0 1.6rem;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-top-color: #dcdcdc;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    ${props =>
      props.type === 'inline' &&
      css`
        margin: 0 0.8rem;
      `}

    &:hover {
      color: #171717;
      border-color: transparent;
    }
  }
`;

export default StyledDropdown;
