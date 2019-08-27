import React, { useContext } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import NavContext from '../../../common/context/NavContext';
import { nav, open } from './Switcher.module.scss';

const Switcher = ({ children }) => {
  const { switcherIsOpen } = useContext(NavContext);

  return (
    <nav
      className={cx(nav, { [open]: switcherIsOpen })}
      aria-label="OCIUS Camera Controls"
      aria-expanded={switcherIsOpen}
      id="switcher-navigation"
    >
      {children}
    </nav>
  );
};

Switcher.propTypes = {
  children: PropTypes.node.isRequired
};

export default Switcher;
