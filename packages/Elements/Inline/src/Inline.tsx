import React from 'react';

const Inline = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-in',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Inline;
