import React from 'react';

export default function Popup(props: any) {
  const { children, ...otherProps } = props;
  return <nu-popup {...otherProps}>{children}</nu-popup>;
}
