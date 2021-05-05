import React from 'react';

function NavigationBarRow(props) {
  let { items, ...otherProps } = props;
  return (
    <El.Grid content="start stretch" item="start stretch" height="90vh" overflow="auto">
      {items &&
        items.map(function (eachItem) {
          return (
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
                <El.Icon column="1" name={eachItem.icon}></El.Icon>
                <El.BaseElement text="middle" padding column="2">
                  {eachItem.text}
                </El.BaseElement>
              </El.Block>
              {eachItem.count ? (
                <El.BaseElement column="2" fill="#bg" radius="round" border="1px #352D3B" padding="5px 15px">
                  {eachItem.count}
                </El.BaseElement>
              ) : (
                ''
              )}
            </El.Grid>
          );
        })}
    </El.Grid>
  );
}

function NavigationBar(props) {
  let { items, ...otherProps } = props;
  return (
    <El.Grid content="stretch" height="100vh" width="min 256px">
      <NavigationBarRow items={items}></NavigationBarRow>
      <nu-footer
        column="0"
        fill=""
        border
        height="10vh"
        padding="1x 2x"
        cursor="pointer"
        height="max 70px"
        use-hover
        mark="hover"
      >
        <El.Icon column="1" name="settings-outline"></El.Icon>
        <El.BaseElement text="middle" padding column="2">
          Settings
        </El.BaseElement>
      </nu-footer>
    </El.Grid>
  );
}

NavigationBar.Row = NavigationBarRow;

export default NavigationBar;
