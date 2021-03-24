import React from 'react';
import { TPopoverProps } from './Popover.type';

function Popover(allProps: TPopoverProps) {
  const { children, ...otherProps } = allProps;
  return <nu-popup {...otherProps}>{children}</nu-popup>;
}

export default Popover;
