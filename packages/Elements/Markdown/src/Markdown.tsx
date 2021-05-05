import React from 'react';

const Markdown = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-markdown',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Markdown;
