import React from 'react';

const Block = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-block',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Block;
