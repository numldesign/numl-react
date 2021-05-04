import React from 'react';

const H3 = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-h3',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default H3;
