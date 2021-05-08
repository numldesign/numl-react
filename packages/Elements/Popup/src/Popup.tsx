import React from 'react';

const Popup = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-popup',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Popup;
