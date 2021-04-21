import React from 'react';

export default function DropdownIcon(props: any) {
  const { children, ...otherProps } = props;
  return <nu-dropdownicon {...otherProps}>{children}</nu-dropdownicon>;
}
