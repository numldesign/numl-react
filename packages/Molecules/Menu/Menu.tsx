import React, { useEffect, useRef } from 'react';
import { TMenuItemProps, TMenuProps } from './Menu.type';

function Menu(allProps: TMenuProps) {
  return <nu-menu {...allProps} />;
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
    <nu-menuitem ref={ref} {...otherProps}>
      {children}
    </nu-menuitem>
  );
};

export default Menu