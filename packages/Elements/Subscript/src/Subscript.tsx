import React from 'react';

const Subscript = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-subscript',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Subscript;
