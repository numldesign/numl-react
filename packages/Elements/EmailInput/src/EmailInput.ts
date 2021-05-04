import React from 'react';

const EmailInput = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-emailinput',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default EmailInput;
