import React from 'react';
import { El } from '../../../Core';
import { TPopoverProps } from './Popover.type';

function Popover(allProps: TPopoverProps) {
  const { children, ...otherProps } = allProps;
  return <El.Popup {...otherProps}>{children}</El.Popup>;
}

export default Popover;
