import { El } from '@numl-react/core';
import React from 'react';
import Menu from '../../../Molecules/Menu/src/Menu';

function NavigationBar(props: any): JSX.Element {
  const { items, height = '100%', ...otherProps } = props;
  return (
    <Menu
      flex
      height={height}
      flow="column"
      content="space-between"
      width="min 256px"
      {...otherProps}
    >
      <El.Block overflow="auto">
        <El.Grid content="space-between" columns="1fr">
          {React.Children.toArray(
            items.map((eachItem: any) => (
              <NavigationBar.Item icon={eachItem.icon}>
                {eachItem.label}
              </NavigationBar.Item>
            ))
          )}
        </El.Grid>
      </El.Block>
      <El.Footer>
        <NavigationBar.Item icon="settings-outline">
          Settings
        </NavigationBar.Item>
      </El.Footer>
    </Menu>
  );
}

NavigationBar.Item = (props: any) => {
  const { label, icon, children, ...otherProps } = props;
  return (
    <El.Menuitem gap="3x" flex width="100%" content="start" {...otherProps}>
      {icon && typeof icon === 'string' ? <El.Icon name={icon} /> : icon}
      {label || children}
    </El.Menuitem>
  );
};

const NavigationChild = function ({ item }) {
  return (
    <>
      <NavigationBar.Item icon={item.icon} label={item.label} to={item.to}>
        {item.label}
      </NavigationBar.Item>
      {item.subNavigationItems ? (
        <El.Block padding="left 2rem" transition="opacity .5s ease">
          {React.Children.toArray(
            item.subNavigationItems.length > 0 &&
              item.subNavigationItems.map((navItem: any) => {
                return <NavigationChild item={navItem} />;
              })
          )}
        </El.Block>
      ) : null}
    </>
  );
};

NavigationBar.Test = (props: any): JSX.Element => {
  const { items, height = '100%', ...otherProps } = props;

  return (
    <Menu
      flex
      height={height}
      flow="column"
      content="space-between"
      width="min 256px"
      {...otherProps}
    >
      <El.Block overflow="auto">
        <El.Grid
          content="space-between stretch"
          xl="1fr"
          lg="1fr"
          md="1fr"
          sm="1fr"
          xs="1fr"
        >
          {React.Children.toArray(
            items.map((eachItem: any) => (
              <>
                <NavigationChild item={eachItem} />
              </>
            ))
          )}
        </El.Grid>
      </El.Block>
      <El.Footer>
        <El.Block border="top">
          <NavigationBar.Item icon="settings-outline">
            Settings
          </NavigationBar.Item>
        </El.Block>
      </El.Footer>
    </Menu>
  );
};

export default NavigationBar;
