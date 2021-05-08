import React from 'react';

const Image = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-img',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Image;
