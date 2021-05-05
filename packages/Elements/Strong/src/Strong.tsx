import React from 'react';

const Strong = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-strong',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Strong;
