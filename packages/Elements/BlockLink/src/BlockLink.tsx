import React from 'react';

const BlockLink = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-blocklink',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default BlockLink;
