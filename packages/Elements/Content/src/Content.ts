import React from 'react';

const Content = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-contents',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Content;
