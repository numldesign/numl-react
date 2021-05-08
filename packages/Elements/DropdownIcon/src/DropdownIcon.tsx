import React from 'react';

const DropdownIcon = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-dropdownicon',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default DropdownIcon;
