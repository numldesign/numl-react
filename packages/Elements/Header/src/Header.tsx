import React from 'react';

const Header = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-header',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Header;
