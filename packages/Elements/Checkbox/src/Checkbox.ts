import React from 'react';

const Checkbox = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-checkbox',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Checkbox;
