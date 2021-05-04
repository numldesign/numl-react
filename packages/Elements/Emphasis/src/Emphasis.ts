import React from 'react';

const Emphasis = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-em',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Emphasis;
