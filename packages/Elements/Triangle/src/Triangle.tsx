import React from 'react';

const Triangle = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-triangle',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Triangle;
