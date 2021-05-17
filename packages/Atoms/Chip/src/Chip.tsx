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
        <El.Icon theme={theme} name={icon} size={size} />
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
      {action && typeof action === 'string' ? (
        <El.Icon theme={theme} name={action} size={size} />
      ) : (
        action
      )}
    </El.Badge>
  );
}

export default Chip;
