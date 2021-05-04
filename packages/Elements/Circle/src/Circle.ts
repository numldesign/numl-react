import React from 'react';

const Circle = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-circle',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Circle;
