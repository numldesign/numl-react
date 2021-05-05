import React from 'react';

const Main = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-main',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Main;
