import React from 'react';

const Menu = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-menu',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Menu;
