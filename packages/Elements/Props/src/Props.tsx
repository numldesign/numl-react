import React from 'react';

export default function Props(props: any) {
  const { children, ...otherProps } = props;
  return <nu-props {...otherProps}>{children}</nu-props>;
}
