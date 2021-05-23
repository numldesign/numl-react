import React from 'react';
import { El } from '@numl-react/core';

function Chip(allProps: any): JSX.Element {
  const {
    size,
    padding = '1x 2x',
    radius = 'round',
    label,
    hover = true,
    theme = 'text',
    icon,
    selectable = 'n',
    onAction,
    action,
    ...otherProp
  } = allProps;

  return (
    <El.Badge
      radius={radius}
      padding={padding}
      cursor="pointer"
      size={size}
      use-hover={hover}
      selectable={selectable}
      {...otherProp}
    >
      {icon && typeof icon === 'string' ? (
        <El.Icon theme={theme} name={icon} padding="0" size={size} />
      ) : (
        icon
      )}
      {label && typeof label === 'string' ? (
        <El.Label theme={theme} size={size}>
          {label}
        </El.Label>
      ) : (
        label
      )}
      {onAction ? (
        <El.Icon
          theme={theme}
          padding="0"
          name="close-circle-outline"
          size={size}
          onClick={onAction}
        />
      ) : (
        action
      )}
    </El.Badge>
  );
}

export default Chip;
