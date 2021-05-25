import React from 'react';
import { El } from '@numl-react/core';
import { Menu } from '../../Menu';

function ActionList(allProps: any): JSX.Element {
  const {
    header,
    variant = 'small',
    fill = 'bg',
    children,
    theme,
    ...otherProps
  } = allProps;

  if (variant === 'large') {
    otherProps.width = '43.125';
  } else {
    otherProps.width = '10';
  }

  return (
    <Menu border="1bw" padding="0" fill={fill} theme={theme} {...otherProps}>
      {header ? (
        <El.Block padding="1.2x 1.5x" theme={theme} border="bottom">
          {header}
        </El.Block>
      ) : null}
      {children}
    </Menu>
  );
}

ActionList.Item = function ActionItem(allProps: any) {
  const { children, fill = 'bg', ...otherProps } = allProps;

  return (
    <Menu.Item content="start" fill={fill} padding="0.625" {...otherProps}>
      {children}
    </Menu.Item>
  );
};

export default ActionList;
