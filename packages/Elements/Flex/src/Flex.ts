import React from 'react';

const Flex = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-flex',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Flex;
