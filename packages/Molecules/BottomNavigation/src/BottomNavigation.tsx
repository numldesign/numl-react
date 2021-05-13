import React from 'react';
import { El } from '@numl-react/core';

function BottomNavigation(allProps: any): JSX.Element {
  const { header, children, ...otherProps } = allProps;

  return (
    <El.Menu
      border="1bw"
      padding="0"
      flow="row"
      items="stretch"
      {...otherProps}
    >
      {children}
    </El.Menu>
  );
}

BottomNavigation.Item = function BottomNavigationItem(allProps: any) {
  const { children, ...otherProps } = allProps;

  return (
    <El.Menuitem flex="1" content="center" {...otherProps}>
      {children}
    </El.Menuitem>
  );
};

export default BottomNavigation;
