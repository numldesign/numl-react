import React from 'react';

export default function BottomNavigation(allProps) {
  const { header, children, ...otherProps } = allProps;

  return (
    <nu-menu
      border="1bw"
      padding="0"
      flow="row"
      items="stretch"
      {...otherProps}
    >
      {children}
    </nu-menu>
  );
}

BottomNavigation.Item = function BottomNavigationItem(allProps) {
  const { children, ...otherProps } = allProps;

  return (
    <nu-menuitem flex="1" content="center" {...otherProps}>
      {children}
    </nu-menuitem>
  );
};
