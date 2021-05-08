import React from 'react';

const Spinner = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-spin',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Spinner;
