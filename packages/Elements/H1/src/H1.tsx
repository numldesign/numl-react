import React from 'react';

const H1 = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-h1',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default H1;
