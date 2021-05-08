import React from 'react';

const Subscript = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-sub',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Subscript;
