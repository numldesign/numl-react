import React from 'react';

const Spacer = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-spacer',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Spacer;
