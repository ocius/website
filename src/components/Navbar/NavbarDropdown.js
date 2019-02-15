import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

class NavbarDropdown extends Component {
  state = {
    open: false
  };

  componentWillReceiveProps(nextProps) {
    const { index, activeIndex } = nextProps;
    if (index === activeIndex) {
      if (this.state.open) {
        this.setState({ open: false });
        // When all the dropdowns are closed, activeIndex is set to -1
        this.props.parentCallBack(-1);
      } else {
        this.setState({ open: true });
      }
    } else {
      this.setState({ open: false });
    }
  }

  renderChildren = () => {
    const { children, index, activeIndex } = this.props;
    let active = false;
    // This particular dropdown is clicked
    if (index === activeIndex) {
      active = true;
    }
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        open: this.state.open,
        active
      });
    });
  };

  getStyles = () => {
    const styles = {
      dropdown: {
        position: 'relative',
        display: 'inline-block',
        listStyle: 'none',
        fontSize: '1.125em',
        fontWeight: '300',
        lineHeight: '1.4',

        ':hover': {
          color: '#60d2f6',
          backgroundColor: '#fff'
        }
      },
      caret: {
        display: 'inline-block',
        width: '0',
        height: '0',
        marginLeft: '2px',
        verticalAlign: 'middle',
        borderTop: '4px dashed',
        borderRight: '4px solid transparent',
        borderLeft: '4px solid transparent'
      },
      link: {
        display: 'inline-block',
        padding: '2.25em 1.25em 1.75em',
        fontSize: '1em',
        fontWeight: '500',
        lineHeight: '100%',
        textDecoration: 'none',
        color: '#001826'
      }
    };
    if (this.props.index === this.props.activeIndex) {
      styles.link.backgroundColor = this.state.open ? '#e7e7e7' : 'transparent';
    }
    return styles;
  };

  render() {
    const { style, name, link, itemStyle } = this.props;
    const defStyle = this.getStyles();

    return (
      <li style={[defStyle.dropdown, style && style]}>
        <a
          href={link}
          onMouseEnter={() => this.setState({ open: true })}
          onMouseLeave={() => this.setState({ open: false })}
          style={[defStyle.link, itemStyle && itemStyle]}
        >
          {name}
          <b style={[defStyle.caret]} />
        </a>
        {this.renderChildren()}
      </li>
    );
  }
}

NavbarDropdown.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
  itemStyle: PropTypes.objectOf(PropTypes.object),
  index: PropTypes.number,
  activeIndex: PropTypes.number,
  parentCallBack: PropTypes.func
};

NavbarDropdown.defaultProps = {
  name: '',
  link: '',
  style: {},
  itemStyle: {},
  index: 0,
  activeIndex: 0,
  parentCallBack: null
};

export default Radium(NavbarDropdown);
