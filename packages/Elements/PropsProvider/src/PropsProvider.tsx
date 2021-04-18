import React from 'react';

export default function PropsProvider(props: any) {
  const { children, ...otherProps } = props;
  return <nu-props {...otherProps}>{children}</nu-props>;
}
