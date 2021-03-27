import React from 'react';

function NavigationBarRow(props) {
  let { items, ...otherProps } = props;
  return (
    <nu-grid column="1fr" overflow="hidden" content="stretch" height="min 100%">
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
                <nu-el
                  column="2"
                  fill="#bg"
                  radius="round"
                  border="1px #352D3B"
                  padding="5px 15px"
                >
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
    <nu-grid row="auto 5fr" content="stretch">
      <NavigationBarRow items={items}></NavigationBarRow>
      <nu-header
        column="-1"
        fill=""
        padding="1x 2x"
        cursor="pointer"
        width="min 256px"
        radius
        use-hover
        mark="hover"
      >
        <nu-icon column="1" name="home"></nu-icon>
        <nu-el text="middle" padding column="2">
          Settings
        </nu-el>
      </nu-header>
    </nu-grid>
  );
}

NavigationBar.Row = NavigationBarRow;

export default NavigationBar;
