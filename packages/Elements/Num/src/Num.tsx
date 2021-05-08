import React from 'react';

const Num = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-num',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Num;
