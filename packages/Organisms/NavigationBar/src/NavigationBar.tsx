import React from 'react';
import { El } from '@numl-react/core';
import Menu from '../../../Molecules/Menu/src/Menu';

function NavigationBarRow(props: any) {
  const { items, ...otherProps } = props;
  return (
    <El.Block fill="bg" height="90vh" overflow="auto" {...otherProps}>
      <El.Grid
        content="space-between"
        padding="2x"
        gap="2x"
        cursor="pointer"
        width="min 256px"
      >
        {items &&
          items.map((eachItem: any) => (
            <El.Flex row="">
              <El.Block gap>
                <El.Icon name={eachItem.icon} />
                <El.BaseElement text="middle" padding>
                  {eachItem.text}
                </El.BaseElement>
              </El.Block>
              {eachItem.count ? (
                <El.BaseElement
                  radius="round"
                  border="1px #352D3B"
                  padding="5px 15px"
                >
                  {eachItem.count}
                </El.BaseElement>
              ) : (
                ''
              )}
            </El.Flex>
          ))}
      </El.Grid>
    </El.Block>
  );
}

function NavigationBar(props: any): JSX.Element {
  const { items, ...otherProps } = props;
  return (
    <Menu
      flex
      flow="column"
      height="100vh"
      fill="bg"
      width="min 256px"
      {...otherProps}
    >
      <NavigationBarRow items={items} />
      <El.Footer
        column="0"
        border
        padding="1x 2x"
        cursor="pointer"
        height="10vh"
        use-hover
        mark="hover"
      >
        <El.Icon column="1" name="settings-outline" />
        <El.BaseElement text="middle" padding>
          Settings
        </El.BaseElement>
      </El.Footer>
    </Menu>
  );
}

NavigationBar.Row = NavigationBarRow;

export default NavigationBar;
