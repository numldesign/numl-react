import React from 'react';
import { TChipProps } from './Chip.type';

function Chip(allProps: TChipProps): JSX.Element {
  const {
    children,
    size,
    padding = '0.3rem 0.7rem',
    radius = 'round',
    label,
    icon,
    selectable = 'n',
    actionIcon,
    theme = 'default',
    ...otherProp
  } = allProps;

  return (
    <nu-badge
      radius={radius}
      padding={padding}
      cursor="pointer"
      selectable={selectable}
      {...otherProp}
    >
      {typeof icon === 'string' ? <nu-icon name={icon} size={size} /> : icon}
      {children && children.trim().length > 0 ? children : null}
      {label && children.trim().length == 0 ? label : null}
      {actionIcon ? actionIcon : null}
    </nu-badge>
  );
}

export default Chip;
