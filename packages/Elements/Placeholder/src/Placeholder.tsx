import React from 'react';

const Placeholder = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-ph',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Placeholder;
