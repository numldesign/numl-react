import React from 'react';

const H6 = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-h6',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default H6;
