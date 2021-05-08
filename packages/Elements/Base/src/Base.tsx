import React from 'react';

const Base = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-base',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Base;
