import React, { useEffect, useRef } from 'react';
import { El } from '@numl-react/core';

function Menu(allProps: any): JSX.Element {
  const { children, fill = 'bg', ...otherProps } = allProps;
  return (
    <El.Menu width="min 15" fill={fill} {...otherProps}>
      {children}
    </El.Menu>
  );
}

Menu.Item = function MenuItem(allProps: any) {
  const ref: any = useRef();
  const { children, fill = 'bg', icon, onClick, ...otherProps } = allProps;

  useEffect(() => {
    if (ref.current && onClick) {
      ref.current.addEventListener('click', (evt: any) => onClick(evt));
    }
  }, []);

  return (
    <El.Menuitem ref={ref} fill={fill} {...otherProps}>
      {icon ? (
        <>{icon && typeof icon === 'string' ? <El.Icon name={icon} /> : icon}</>
      ) : null}
      {children}
    </El.Menuitem>
  );
};

export default Menu;
