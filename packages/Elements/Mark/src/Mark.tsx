import React from 'react';

const Mark = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-mark',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Mark;
