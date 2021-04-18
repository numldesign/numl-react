import React from 'react';

export default function Base(props: any) {
  const { children, ...otherProps } = props;
  return <nu-el {...otherProps}>{children}</nu-el>;
}
