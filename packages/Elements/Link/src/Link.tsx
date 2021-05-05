import React from 'react';

const Link = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-link',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Link;
