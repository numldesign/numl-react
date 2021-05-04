import React from 'react';

const H2 = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-h2',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default H2;
