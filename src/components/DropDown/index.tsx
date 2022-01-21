import React from 'react';

import useClickOutside from 'lib/useClickOutside';

import * as Components from './components';
import styles from './styles.module.scss';

import type { TDropDown } from './types';

const DropDown: TDropDown = (props) => {
  const { toggle, variant = 'right', children } = props;
  const [ref, isVisible, setIsVisible] = useClickOutside<HTMLDivElement>(false);

  const toggleDropDown = () => setIsVisible(!isVisible);

  return (
    <div className={styles.dropdown} ref={ref}>
      <button type="button" className={styles.toggle} onClick={toggleDropDown}>
        {toggle}
      </button>
      {isVisible && <div className={styles[variant]}>{children}</div>}
    </div>
  );
};

DropDown.Link = Components.DropDownLink;
DropDown.Divider = Components.DropDownDivider;
DropDown.Button = Components.DropDownButton;

export default DropDown;
