import React from 'react';

function NavigationBarRow(props) {
  let { items, ...otherProps } = props;
  return (
    <nu-grid content="start stretch" item="start stretch" height="90vh" overflow="auto">
      {items &&
        items.map(function (eachItem) {
          return (
            <nu-grid
              content="space-between"
              padding="1x 2x"
              cursor="pointer"
              width="min 256px"
              radius
              use-active
              use-hover
              mark="hover"
            >
              <nu-block column="1" gap>
                <nu-icon column="1" name={eachItem.icon}></nu-icon>
                <nu-el text="middle" padding column="2">
                  {eachItem.text}
                </nu-el>
              </nu-block>
              {eachItem.count ? (
                <nu-el column="2" fill="#bg" radius="round" border="1px #352D3B" padding="5px 15px">
                  {eachItem.count}
                </nu-el>
              ) : (
                ''
              )}
            </nu-grid>
          );
        })}
    </nu-grid>
  );
}

function NavigationBar(props) {
  let { items, ...otherProps } = props;
  return (
    <nu-grid content="stretch" height="100vh" width="min 256px">
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
        <nu-icon column="1" name="settings-outline"></nu-icon>
        <nu-el text="middle" padding column="2">
          Settings
        </nu-el>
      </nu-footer>
    </nu-grid>
  );
}

NavigationBar.Row = NavigationBarRow;

export default NavigationBar;
