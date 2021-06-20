import { El } from '@numl-react/core';
import React from 'react';
import Menu from '../../../Molecules/Menu/src/Menu';

function NavigationBar(props: any): JSX.Element {
  const { items, height = '100%', theme = 'default', ...otherProps } = props;
  return (
    <Menu
      flex
      theme={theme}
      height={height}
      flow="column"
      content="space-between"
      width="min 256px"
      {...otherProps}
    >
      <El.Block overflow="auto" theme={theme}>
        <El.Grid content="space-between" columns="1fr">
          {React.Children.toArray(
            items.map((eachItem: any) => (
              <NavigationBar.Item icon={eachItem.icon} theme={theme}>
                {eachItem.text}
              </NavigationBar.Item>
            ))
          )}
        </El.Grid>
      </El.Block>
      <El.Footer>
        <NavigationBar.Item icon="settings-outline" theme={theme}>
          Settings
        </NavigationBar.Item>
      </El.Footer>
    </Menu>
  );
}

NavigationBar.Item = (props: any) => {
  const { label, icon, children, theme = 'default', ...otherProps } = props;
  return (
    <El.Menuitem
      gap="1x 2x"
      theme={theme}
      display="flex"
      flow="row"
      width="100%"
      {...otherProps}
    >
      {icon && typeof icon === 'string' ? <El.Icon name={icon} /> : icon}
      {label || children}
    </El.Menuitem>
  );
};

NavigationBar.Dropdown = (props: any) => {
  const { label, theme = 'default', icon, children, ...otherProps } = props;
  return (
    <El.Menuitem
      gap="1x 2x"
      display="flex"
      flow="row"
      width="100%"
      theme={theme}
      {...otherProps}
    >
      {icon && typeof icon === 'string' ? <El.Icon name={icon} /> : icon}
      {label}
      <El.DropdownIcon theme={theme} />
      <El.Popup theme={theme}>{children}</El.Popup>
    </El.Menuitem>
  );
};

export default NavigationBar;
