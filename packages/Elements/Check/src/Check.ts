import React from 'react';

const Check = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-check',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Check;
