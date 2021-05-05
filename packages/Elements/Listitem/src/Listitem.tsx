import React from 'react';

const Listitem = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-listitem',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Listitem;
