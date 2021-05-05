import React from 'react';

const Listbox = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-listbox',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});
export default Listbox;
