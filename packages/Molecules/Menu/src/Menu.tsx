import React, { useEffect, useRef } from 'react';
import { El } from '@numl-react/core';

function Menu(allProps: any) {
  const { children, ...otherProps } = allProps;
  return (
    <El.Menu width="min 15" {...otherProps}>
      {children}
    </El.Menu>
  );
}

Menu.Item = function MenuItem(allProps: any) {
  const ref: any = useRef();
  const { children, onClick, ...otherProps } = allProps;

  useEffect(() => {
    if (ref.current && onClick) {
      ref.current.addEventListener('click', (evt: any) => onClick(evt));
    }
  }, []);

  return (
    <El.Menuitem ref={ref} {...otherProps}>
      {children}
    </El.Menuitem>
  );
};

export default Menu;
