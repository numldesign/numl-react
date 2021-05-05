import React from 'react';

const RadioGroup = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-radiogroup',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default RadioGroup;
