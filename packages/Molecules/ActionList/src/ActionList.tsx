import React from 'react';
import { El } from '@numl-react/core';
import { Menu } from '../../Menu';

function ActionList(allProps: any): JSX.Element {
  const { header, children, theme, ...otherProps } = allProps;

  return (
    <Menu border="1bw" padding="0" theme={theme} {...otherProps}>
      {header ? (
        <El.Block
          padding="0.625x 0.75x"
          theme={theme}
          text="sb"
          border="bottom"
        >
          {header}
        </El.Block>
      ) : null}
      {children}
    </Menu>
  );
}

ActionList.Item = function ActionItem(allProps: any) {
  const { children, ...otherProps } = allProps;

  return (
    <Menu.Item content="start" padding="0.625" {...otherProps}>
      {children}
    </Menu.Item>
  );
};

export default ActionList;
