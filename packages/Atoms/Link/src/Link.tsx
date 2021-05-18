import React from 'react';
import { El } from '@numl-react/core';

function Link(allProps: any): JSX.Element {
  const { label, size, theme, color, icon, ...otherProps } = allProps;

  return (
    <El.Link as="nu-link" text="n" {...otherProps}>
      {label && typeof label === 'string' ? (
        <El.Label inline size={size} theme={theme} color={color}>
          {label}
        </El.Label>
      ) : (
        label
      )}
      {icon && typeof icon === 'string' ? (
        <El.Icon
          inline
          padding="0 1x"
          text="center"
          name={icon}
          size={size}
          theme={theme}
          color={color}
        />
      ) : (
        icon
      )}
    </El.Link>
  );
}

export default Link;
