import React from 'react';

const Nav = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-nav',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Nav;
