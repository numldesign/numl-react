import React from 'react';

const Field = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-field',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Field;
