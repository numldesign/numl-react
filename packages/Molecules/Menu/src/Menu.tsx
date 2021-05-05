import React, { useEffect, useRef } from 'react';
import { TMenuItemProps, TMenuProps } from './Menu.type';

function Menu(allProps: TMenuProps) {
  const { children, ...otherProps } = allProps;
  return <nu-menu {...otherProps}>{children}</nu-menu>;
}

Menu.Item = function MenuItem(allProps: TMenuItemProps) {
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
