import React from 'react';

const H4 = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-h4',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default H4;
