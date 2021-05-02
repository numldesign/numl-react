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

const NumberInput = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-numinput',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
const InputValue = React.forwardRef((props: any, ref) => {
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

export { Input, NumberInput, InputValue };
