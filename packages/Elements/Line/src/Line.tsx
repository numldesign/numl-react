import React from 'react';

const Line = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-line',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Line;
