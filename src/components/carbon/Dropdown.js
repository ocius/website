import styled from 'styled-components';
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
  height: 2.5rem;
  cursor: pointer;
  color: #171717;
  transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);

  &:hover {
    background-color: #e5e5e5;
  }

  &:focus {
    outline: 2px solid #0062ff;
    outline-offset: -2px;
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
    height: 2.5rem;
    padding: 0 3rem 0 1rem;
    cursor: pointer;
    outline: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bx--list-box__label {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0.16px;
    color: #171717;
    user-select: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .bx--list-box__menu-icon {
    position: absolute;
    right: 1rem;
    height: 100%;
    transition: transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9),
      -webkit-transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
    cursor: pointer;

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
    max-height: 8.75rem;
    overflow-y: auto;
    z-index: 9100;
  }

  .bx--list-box__menu-item {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0.16px;
    height: 2.5rem;
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
    height: 2.5rem;
    color: #565656;
    text-decoration: none;
    font-weight: normal;
    line-height: 1rem;
    padding: 0.6875rem 0;
    margin: 0 1rem;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-top-color: #dcdcdc;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
      color: #171717;
      border-color: transparent;
    }
  }
`;

export default StyledDropdown;
