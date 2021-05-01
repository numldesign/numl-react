import React from 'react';

const Root = React.forwardRef((props: any, ref) => {
  let { children, ...otherProps } = props;

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
