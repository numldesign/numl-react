import React from 'react';

const Spinner = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-spinner',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Spinner;
