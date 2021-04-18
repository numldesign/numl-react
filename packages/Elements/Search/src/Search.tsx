import React from 'react';

export default function Search(props: any) {
  const { children, ...otherProps } = props;
  return <nu-search {...otherProps}>{children}</nu-search>;
}
