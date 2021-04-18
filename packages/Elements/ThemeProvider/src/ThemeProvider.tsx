import React from 'react';

export default function ThemeProvider(props: any) {
  const { src, children, ...otherProps } = props;
  return <nu-theme {...otherProps}></nu-theme>;
}
