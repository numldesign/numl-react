import React from 'react';
/**
 * Form Input Field
 */
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

/**
 * Form Number Input field
 */
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
/**
 * Form Input Value
 */
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
