import React from 'react';

const Switch = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-switch',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Switch;
