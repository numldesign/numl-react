import React from 'react';

const Password = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-password',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Password;
