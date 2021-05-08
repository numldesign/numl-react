import React from 'react';

const DateTime = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-datetime',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default DateTime;
