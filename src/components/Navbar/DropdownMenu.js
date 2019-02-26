import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import mq from '../../common/mq';

class DropdownMenu extends Component {
  getStyles = () => {
    const { open, active } = this.props;
    const styles = {
      menu: {
        margin: '0px',
        padding: '0px',
        position: 'absolute',
        left: '0',
        border: '1px solid #fff',
        background: 'white',
        zIndex: '1000',
        textAlign: 'left',
        listStyle: 'none',

        [`@media (max-width: ${mq.max[768]})`]: {
          position: 'static',
          float: 'none',
          width: 'auto',
          marginTop: '0',
          backgroundColor: 'transparent',
          border: '0',
          boxShadow: 'none'
        }
      },
      link: {
        display: 'block',
        padding: '10px 20px',
        clear: 'both',
        fontWeight: 'normal',
        lineHeight: '1.42857143',
        color: '#333',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        boxSizing: 'border-box',

        ':hover': {
          background: '#efefef',
          color: '#001826'
        },

        ':focus': {
          background: '#efefef',
          color: '#001826'
        },

        [`@media (max-width: ${mq.max[768]})`]: {
          backgroundColor: 'transparent',
          color: '#777',

          ':hover': {
            color: '#333',
            backgroundColor: 'transparent'
          }
        }
      }
    };
    if (active) {
      styles.menu.display = open ? 'block' : 'none';
    } else {
      styles.menu.display = 'none';
    }
    return styles;
  };

  render() {
    const defStyle = this.getStyles();
    const { menuItems, style, menuItemStyle } = this.props;
    return (
      <ul style={[defStyle.menu, style && style]}>
        {menuItems.map(item => {
          return (
            <li key={menuItems.indexOf(item)}>
              <a
                key={item.name}
                style={[defStyle.link, menuItemStyle && menuItemStyle]}
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

DropdownMenu.propTypes = {
  menuItems: PropTypes.objectOf(PropTypes.array),
  style: PropTypes.objectOf(PropTypes.object),
  menuItemStyle: PropTypes.objectOf(PropTypes.object),
  open: PropTypes.bool
};

DropdownMenu.defaultProps = {
  menuItems: [],
  style: {},
  menuItemStyle: {},
  open: false
};

export default Radium(DropdownMenu);
