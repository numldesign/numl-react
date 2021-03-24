import React from 'react';
import {
  TBottomNavigationItemProps,
  TBottomNavigationProps,
} from './BottomNavigation.type';

function BottomNavigation(allProps: TBottomNavigationProps): JSX.Element {
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

BottomNavigation.Item = function BottomNavigationItem(
  allProps: TBottomNavigationItemProps
) {
  const { children, ...otherProps } = allProps;

  return (
    <nu-menuitem flex="1" content="center" {...otherProps}>
      {children}
    </nu-menuitem>
  );
};

export default BottomNavigation;
