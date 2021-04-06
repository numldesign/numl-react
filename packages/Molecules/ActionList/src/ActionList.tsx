import React from 'react';
import { Menu } from './../../Menu';
import { TActionListItemProps, TActionListProps } from './ActionList.type';

function ActionList(allProps: TActionListProps): JSX.Element {
  const { header, children, ...otherProps } = allProps;

  return (
    <Menu border="1bw" padding="0" {...otherProps}>
      {header ? (
        <nu-block padding="1x 1.6x" text="sb" border="bottom">
          {header}
        </nu-block>
      ) : null}
      {children}
    </Menu>
  );
}

ActionList.Item = function ActionItem(allProps: TActionListItemProps) {
  const { children, ...otherProps } = allProps;

  return (
    <Menu.Item content="start" {...otherProps}>
      {children}
    </Menu.Item>
  );
};

export default ActionList;
