import React from 'react';

const Superscript = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-sup',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Superscript;
