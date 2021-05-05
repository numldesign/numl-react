import React from 'react';

const Row = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-row',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Row;
