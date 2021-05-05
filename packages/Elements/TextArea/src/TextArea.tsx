import React from 'react';

const TextArea = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-textarea',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default TextArea;
