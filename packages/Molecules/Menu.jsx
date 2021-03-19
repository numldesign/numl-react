import React, { useEffect, useRef } from 'react';

export default function Menu(allProps) {
  return <nu-menu {...allProps} />;
}

Menu.Item = function MenuItem(allProps) {
  const ref = useRef();
  const { children, onClick, ...otherProps } = allProps;

  useEffect(() => {
    if (ref.current && onClick) {
      ref.current.addEventListener('click', (evt) => onClick(evt));
    }
  }, []);

  return (
    <nu-menuitem ref={ref} {...otherProps}>
      {children}
    </nu-menuitem>
  );
};
