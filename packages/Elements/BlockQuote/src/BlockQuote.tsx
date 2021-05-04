import React from 'react';

const BlockQuote = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-blockquote',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default BlockQuote;
