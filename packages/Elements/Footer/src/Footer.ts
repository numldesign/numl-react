import React from 'react';

const Footer = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-footer',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Footer;
