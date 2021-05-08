import React from 'react';

const Flow = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-flow',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Flow;
