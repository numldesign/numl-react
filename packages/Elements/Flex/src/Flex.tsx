import React from 'react';

export default function Flex(props: any) {
  const { children, ...otherProps } = props;
  return <nu-flex {...otherProps}>{children}</nu-flex>;
}
