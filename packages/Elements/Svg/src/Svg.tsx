import React from 'react';

export default function Svg(props: any) {
  const { children, ...otherProps } = props;
  return <nu-svg {...otherProps}>{children}</nu-svg>;
}
