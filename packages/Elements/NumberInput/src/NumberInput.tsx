import React from 'react';

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
export default NumberInput;
