import React from 'react';

export default function Popover(allProps) {
  const { children, ...otherProps } = allProps;
  return <nu-popup {...otherProps}>{children}</nu-popup>;
}
