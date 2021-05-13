import React from 'react';
import { El } from '@numl-react/core';

function Link(allProps: any) {
  const { label, icon, ...otherProps } = allProps;

  return (
    <El.Action as="nu-link" text="n" {...otherProps}>
      {label}
      {icon &&
        (typeof icon === 'string' ? (
          <El.Icon name={icon} text="middle" />
        ) : (
          icon
        ))}
    </El.Action>
  );
}

export default Link;
