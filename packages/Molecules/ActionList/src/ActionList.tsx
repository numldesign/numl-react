import React from 'react';
import { Menu } from './../../Menu';
import { El } from '@numl-react/core';

function ActionList(allProps: any): JSX.Element {
  const { header, children, ...otherProps } = allProps;

  return (
    <Menu border="1bw" padding="0" {...otherProps}>
      {header ? (
        <El.Block padding="1x 1.5x" text="sb" border="bottom">
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
    <Menu.Item content="start" {...otherProps}>
      {children}
    </Menu.Item>
  );
};

export default ActionList;
