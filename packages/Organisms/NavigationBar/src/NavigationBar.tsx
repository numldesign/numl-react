import React from 'react';
import { El } from '@numl-react/core';

function NavigationBarRow(props: any) {
  const { items, ...otherProps } = props;
  return (
    <El.Grid
      content="start stretch"
      width="100%"
      border
      fill="bg"
      items="start stretch"
      height="90vh"
      overflow="auto"
      {...otherProps}
    >
      {items &&
        items.map((eachItem: any) => (
          <El.Grid
            content="space-between"
            padding="1x 2x"
            cursor="pointer"
            width="min 256px"
            radius
            use-active
            use-hover
            mark="hover"
          >
            <El.Block column="1" gap>
              <El.Icon column="1" name={eachItem.icon} />
              <El.BaseElement text="middle" padding column="2">
                {eachItem.text}
              </El.BaseElement>
            </El.Block>
            {eachItem.count ? (
              <El.BaseElement
                column="2"
                fill="#bg"
                radius="round"
                border="1px #352D3B"
                padding="5px 15px"
              >
                {eachItem.count}
              </El.BaseElement>
            ) : (
              ''
            )}
          </El.Grid>
        ))}
    </El.Grid>
  );
}

function NavigationBar(props: any) {
  const { items, ...otherProps } = props;
  return (
    <El.Grid content="stretch" height="100vh" width="min 256px" {...otherProps}>
      <NavigationBarRow items={items} />
      <El.Footer
        column="0"
        fill=""
        border
        padding="1x 2x"
        cursor="pointer"
        height="max 70px"
        use-hover
        mark="hover"
      >
        <El.Icon column="1" name="settings-outline" />
        <El.BaseElement text="middle" padding column="2">
          Settings
        </El.BaseElement>
      </El.Footer>
    </El.Grid>
  );
}

NavigationBar.Row = NavigationBarRow;

export default NavigationBar;
