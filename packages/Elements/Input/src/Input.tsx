import React from 'react';

const Input = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-input',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Input;
