import React from 'react';

const InlineMarkdown = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-md',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default InlineMarkdown;
