import React from 'react';

const DropdownIcon = React.forwardRef((props: any, ref) => {
  const { children, theme, ...otherProps } = props;

  otherProps.size = '1.25rem';
  otherProps.padding = '0 1x';
  otherProps.theme = theme || '0 1x';

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
