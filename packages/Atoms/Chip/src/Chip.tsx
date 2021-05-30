import React from 'react';
import * as El from '@numl-react/elements';

function Chip(allProps: any): JSX.Element {
  const {
    size,
    padding = '1x 2x',
    radius = 'round',
    label,
    theme,
    icon,
    selectable = 'n',
    onAction,
    action,
    ...otherProp
  } = allProps;

  return (
    <El.Button
      radius={radius}
      padding={padding}
      cursor="pointer"
      size={size}
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
    </El.Button>
  );
}

export default Chip;
