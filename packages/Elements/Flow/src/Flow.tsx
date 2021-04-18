import React from 'react';

export default function Flow(props: any) {
  const { children, ...otherProps } = props;
  return <nu-flow {...otherProps}>{children}</nu-flow>;
}
