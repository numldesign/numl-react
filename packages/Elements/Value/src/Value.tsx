import React from 'react';

const Value = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-value',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Value;
