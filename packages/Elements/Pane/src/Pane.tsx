import React from 'react';

export default function Pane(props: any) {
  const { children, ...otherProps } = props;
  return <nu-pane {...otherProps}>{children}</nu-pane>;
}
