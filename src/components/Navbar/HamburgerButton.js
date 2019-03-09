import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  navbarToggle: {
    position: 'relative',
    padding: '9px 10px',
    marginTop: '8px',
    marginRight: '15px',
    marginBottom: '8px',
    marginLeft: 'auto',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
    borderColor: '#ddd',
    cursor: 'pointer',
    boxSizing: 'border-box',

    ':hover': {
      backgroundColor: '#ddd'
    },

    ':focus': {
      outline: '0',
      backgroundColor: '#ddd'
    },
    '@media (min-width: 768px)': {
      display: 'none'
    }
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    borderWidth: '0',
    borderStyle: 'none',
    boxSizing: 'border-box'
  },
  iconBar: {
    display: 'block',
    width: '22px',
    height: '2px',
    borderRadius: '1px',
    backgroundColor: '#888',
    boxSizing: 'border-box'
  },
  burger: {
    marginTop: '4px'
  }
};

class HamburgerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    return (
      <button
        type="button"
        style={[styles.navbarToggle]}
        onClick={
          this.props.handleClick
            ? this.props.handleClick
            : () => {
                this.handleClick();
              }
        }
      >
        <span style={[styles.srOnly]}>Toggle navigation</span>
        <span style={[styles.iconBar]} />
        <span style={[styles.iconBar, styles.burger]} />
        <span style={[styles.iconBar, styles.burger]} />
      </button>
    );
  }
}

export default Radium(HamburgerButton);
