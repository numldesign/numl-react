import React from 'react';
import { El } from '@numl-react/core';

function Popover(allProps: any) {
  const { children, ...otherProps } = allProps;
  return <El.Popup {...otherProps}>{children}</El.Popup>;
}

export default Popover;
