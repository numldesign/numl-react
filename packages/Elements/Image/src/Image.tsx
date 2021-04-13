import React from 'react';

export default function Image(props: any) {
  const { src, children, ...otherProps } = props;
  return <nu-img src={src} {...otherProps}></nu-img>;
}
