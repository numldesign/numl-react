import React from 'react';

const InputGroup = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-inputgroup',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default InputGroup;
