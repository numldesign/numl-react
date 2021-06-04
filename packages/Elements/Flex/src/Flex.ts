import React from 'react';

const Flex = React.forwardRef((props: any, ref): JSX.Element => {
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
