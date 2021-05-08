import React from 'react';

const Label = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-label',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Label;
