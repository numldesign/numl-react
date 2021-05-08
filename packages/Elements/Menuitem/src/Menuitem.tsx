import React from 'react';

const Menuitem = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-menuitem',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Menuitem;
