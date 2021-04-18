import React from 'react';

export default function Root(props: any) {
  let { children, onInit, padding = '', ...otherProps } = props;

  return (
    <nu-root padding={padding} {...otherProps}>
      {children}
    </nu-root>
  );
}
