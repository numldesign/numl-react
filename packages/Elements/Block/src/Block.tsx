import React from 'react';

export default function Block(props: any) {
  const { children, ...otherProps } = props;
  return <nu-block {...otherProps}>{children}</nu-block>;
}
