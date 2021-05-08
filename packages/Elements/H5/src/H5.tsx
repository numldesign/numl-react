import React from 'react';

const H5 = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-h5',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default H5;
