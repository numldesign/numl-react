import React from 'react';

export default function Root(props: any) {
  let { children, onInit, fill = 'black', padding = 'around', ...otherProps } = props;

  return (
    <nu-root padding={padding} fill={fill} {...otherProps}>
      {children}
    </nu-root>
  );
}
