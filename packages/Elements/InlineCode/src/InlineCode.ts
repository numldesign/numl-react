import React from 'react';

const InlineCode = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-code',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default InlineCode;
