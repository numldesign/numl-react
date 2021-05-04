import React from 'react';

const Form = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-form',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Form;
