import React from 'react';

const ItemButton = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-itembtn',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default ItemButton;
