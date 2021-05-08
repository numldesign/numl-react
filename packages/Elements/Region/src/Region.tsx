import React from 'react';

const Region = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-region',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Region;
