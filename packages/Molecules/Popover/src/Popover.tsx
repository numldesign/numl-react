import React from 'react';
import { El } from '@numl-react/core';
import { TPopoverProps } from './Popover.type';

function Popover(allProps: TPopoverProps) {
  const { children, ...otherProps } = allProps;
  return <El.Popup {...otherProps}>{children}</El.Popup>;
}

export default Popover;
