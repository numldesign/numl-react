import React from 'react';

const Special = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-special',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Special;
