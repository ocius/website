import React, { useContext } from 'react';
import cx from 'classnames';
import NavContext from '../../../common/context/NavContext';
import StyledDropdown from '../Dropdown';
import { FormWrapper } from '../shared';
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
      <FormWrapper>{children}</FormWrapper>
    </nav>
  );
};

const DefaultChildren = () => (
  <>
    <img
      src="https://usvna.ocius.com.au/usvna/oc_server?getliveimage&camera=Bob%20Mast"
      alt="Webcam view"
    />
    <StyledDropdown
      id="image-quality"
      type="default"
      label="Image quality"
      ariaLabel="Dropdown"
      titleText="Link Type:"
      items={['100%', '90%', '80%', '70%', '60%', '50%', '40%', '30%', '20%', '10%']}
    />
  </>
);

Switcher.defaultProps = {
  children: <DefaultChildren />
};

export default Switcher;
