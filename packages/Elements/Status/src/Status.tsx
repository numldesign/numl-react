import React from 'react';

const Status = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-status',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Status;
