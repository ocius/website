import React from 'react';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from './Icon';

const ListMenu = styled.div`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  position: absolute;
  right: 0;
  left: 0;
  z-index: 6000;
  width: 100%;
  overflow-y: auto;
  background-color: #f3f3f3;
  transition: max-height 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);

  :focus {
    outline: 1px solid ${(props) => props.theme.colors.themePrimary};
  }
`;

const ListMenuItemOption = styled.div`
  outline: 2px solid transparent;
  outline-offset: -2px;
  display: block;
  height: 4rem;
  margin: 0 1rem;
  padding: 1.1rem 2.4rem 1.1rem 0;
  overflow: hidden;
  color: #525252;
  font-weight: 400;
  line-height: 1.6rem;
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
  border-top: 1px solid transparent;
  border-top-color: #e0e0e0;
  border-bottom: 1px solid transparent;
  transition: border-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),
    color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
`;

const ListMenuItem = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.29;
  letter-spacing: 0.16px;
  position: relative;
  height: 4rem;
  color: #525252;
  cursor: pointer;
  transition: background 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  user-select: none;

  ${(props) =>
    props.$isActive &&
    css`
      color: #161616;
      background-color: #e0e0e0;
      border-bottom-color: #e0e0e0;

      ${ListMenuItemOption} {
        color: #161616;
      }
    `}

  ${(props) =>
    props.$isHighlighted &&
    css`
      color: #161616;
      background-color: #e5e5e5;
      border-color: transparent;

      ${ListMenuItemOption} {
        color: #161616;
        border-top-color: transparent;
      }
    `}
`;

const Field = styled.button`
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

  :focus {
    outline-color: rgba(14, 190, 255, 0.4);
    outline-style: auto;
    outline-width: 4px;
  }

  &[aria-expanded='false'] ${ListMenu} {
    max-height: 0;
  }
`;

const Label = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0.16px;
  color: #171717;
  user-select: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const List = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  outline-offset: -2px;
  position: relative;
  display: block;
  width: 100%;
  height: 4rem;
  color: #161616;
  list-style: none;
  background-color: #f3f3f3;
  border: none;
  border-bottom: 1px solid #8d8d8d;
  outline: 2px solid transparent;
  cursor: pointer;
  transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);

  :hover {
    background-color: #e5e5e5;
  }

  ${(props) =>
    props.$disabled &&
    css`
      border-bottom-color: transparent;

      :hover {
        background-color: #f3f3f3;
      }

      :focus {
        outline: none;
      }

      ${Field} {
        cursor: not-allowed;
      }

      ${Label} {
        color: #c6c6c6;
      }
    `}

  ${(props) =>
    props.$isOpen &&
    css`
      border-bottom-color: #e0e0e0;

      :hover {
        background-color: #f3f3f3;
      }

      ${ListMenu} {
        max-height: 22rem;
      }
    `}
`;

const Title = styled.label`
  box-sizing: border-box;
  padding: 0;
  border: 0;
  font-size: 1.5rem;
  line-height: 1.34;
  letter-spacing: 0.32px;
  font-weight: 400;
  display: inline-block;
  margin: 0 0 0.8rem;
  vertical-align: baseline;

  ${(props) =>
    props.$disabled &&
    css`
      color: #c6c6c6;
    `}
`;

const HelperText = styled.div`
  font-size: 1.2rem;
  line-height: 1.34;
  letter-spacing: 0.32px;
  z-index: 0;
  width: 100%;
  margin-top: 0.4rem;
  color: #525252;
  opacity: 1;

  ${(props) =>
    props.$disabled &&
    css`
      color: #c6c6c6;
    `}
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 1.6rem;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  transition: transform 70ms cubic-bezier(0.2, 0, 0.38, 0.9);

  > svg {
    fill: #171717;
    height: 100%;
  }

  ${(props) =>
    props.$isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

const defaultItemToString = (item) => {
  if (typeof item === 'string') {
    return item;
  }

  return item ? item.label : '';
};

const handleOnKeyDown = (event) => {
  if (event.keyCode === 27) {
    event.stopPropagation();
  }
};

const handleClick = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

class Dropdown extends React.Component {
  handleOnChange = (selectedItem) => {
    if (this.props.onChange) {
      this.props.onChange({ selectedItem });
    }
  };

  render() {
    const {
      className,
      disabled,
      items,
      label,
      ariaLabel,
      id,
      titleText,
      helperText,
      initialSelectedItem,
      itemToString: itemToStringCallback,
      selectedItem: currentSelectedItem,
    } = this.props;
    const title = titleText ? (
      <Title htmlFor={id} $disabled={disabled}>
        {titleText}
      </Title>
    ) : null;
    const helper = helperText ? <HelperText $disabled={disabled}>{helperText}</HelperText> : null;

    return (
      <div>
        {title}
        {helper}
        <Downshift
          onChange={this.handleOnChange}
          itemToString={itemToStringCallback}
          defaultSelectedItem={initialSelectedItem}
          selectedItem={currentSelectedItem}
        >
          {({
            isOpen,
            itemToString,
            selectedItem,
            highlightedIndex,
            getRootProps,
            getToggleButtonProps,
            getItemProps,
            getLabelProps,
          }) => (
            <List
              role="listbox"
              tabIndex="-1"
              onKeyDown={handleOnKeyDown}
              onClick={handleClick}
              aria-label={ariaLabel}
              className={className}
              $isOpen={isOpen}
              $disabled={disabled}
              id={id}
              {...getRootProps({ refKey: 'ref' })}
            >
              <Field
                id={id}
                tabIndex="0"
                role="combobox"
                aria-haspopup="listbox"
                aria-owns={`${id}__menu`}
                aria-controls={`${id}__menu`}
                {...getToggleButtonProps({ disabled })}
              >
                <Label {...getLabelProps()}>
                  {selectedItem ? itemToString(selectedItem) : label}
                </Label>
                <IconWrapper $isOpen={isOpen} role="button">
                  <Icon.ChevronDownGlyph
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    label={isOpen ? 'Close menu' : 'Open menu'}
                    style={{ width: 10, height: 6 }}
                    role="img"
                  />
                </IconWrapper>
              </Field>
              {isOpen && (
                <ListMenu aria-label={ariaLabel} id={`${id}__menu`} role="listbox">
                  {items.map((item, index) => (
                    <ListMenuItem
                      key={itemToString(item)}
                      $isActive={selectedItem === item}
                      $isHighlighted={highlightedIndex === index || selectedItem === item}
                      {...getItemProps({ item, index })}
                    >
                      <ListMenuItemOption>{itemToString(item)}</ListMenuItemOption>
                    </ListMenuItem>
                  ))}
                </ListMenu>
              )}
            </List>
          )}
        </Downshift>
      </div>
    );
  }
}

Dropdown.propTypes = {
  /**
   * 'aria-label' of the ListBox component.
   */
  ariaLabel: PropTypes.string,

  /**
   * Provide a custom className to be applied on the bx--dropdown node
   */
  className: PropTypes.string,

  /**
   * Disable the control
   */
  disabled: PropTypes.bool,

  /**
   * Provide helper text that is used alongside the control label for
   * additional help
   */
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Specify a custom `id`
   */
  id: PropTypes.string.isRequired,

  /**
   * Allow users to pass in an arbitrary item or a string (in case their items are an array of strings)
   * from their collection that are pre-selected
   */
  initialSelectedItem: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list.
   */
  itemToString: PropTypes.func,

  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: PropTypes.arrayOf(PropTypes.any).isRequired,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  label: PropTypes.node.isRequired,

  /**
   * `onChange` is a utility for this controlled component to communicate to a
   * consuming component what kind of internal state changes are occuring.
   */
  onChange: PropTypes.func,

  /**
   * In the case you want to control the dropdown selection entirely.
   */
  selectedItem: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Provide the title text that will be read by a screen reader when
   * visiting this control
   */
  titleText: PropTypes.node,
};

Dropdown.defaultProps = {
  className: '',
  ariaLabel: '',
  disabled: false,
  initialSelectedItem: null,
  selectedItem: null,
  itemToString: defaultItemToString,
  onChange: null,
  titleText: '',
  helperText: '',
};

export default Dropdown;
