import React from 'react';
import { El } from '@numl-react/core';

function Chip(allProps: any): JSX.Element {
  const {
    children,
    size,
    padding = '0.3rem 0.7rem',
    radius = 'round',
    label,
    icon,
    selectable = 'n',
    actionIcon,
    ...otherProp
  } = allProps;

  return (
    <El.Badge radius={radius} padding={padding} cursor="pointer" selectable={selectable} {...otherProp}>
      {typeof icon === 'string' ? <El.Icon name={icon} size={size} /> : icon}
      {children && children.trim().length > 0 ? children : null}
      {label && children.trim().length == 0 ? label : null}
      {actionIcon ? actionIcon : null}
    </El.Badge>
  );
}

export default Chip;
