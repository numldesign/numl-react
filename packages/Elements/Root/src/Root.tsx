import React from 'react';

const Root = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-root',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Root;
