import React from 'react';
import { TBadgeProps } from './Badge.type';

function Badge(allProps: TBadgeProps): JSX.Element {
  const { children, size, label, icon, ...otherProps } = allProps;
  return (
    <nu-badge radius="4x" padding="0.33rem 0.67rem" {...otherProps}>
      {typeof icon === 'string' ? <nu-icon name={icon} /> : icon}
      {children ? children : <Badge.Label size={size}>{label}</Badge.Label>}
    </nu-badge>
  );
}

Badge.Label = function BadgeLabel(props: any): JSX.Element {
  let { children, size, ...otherProps } = props;
  return (
    <nu-el size={size} {...otherProps}>
      {children}
    </nu-el>
  );
};

Badge.Icon = function BadgeIcon(props: any): JSX.Element {
  let { name, ...otherProps } = props;
  return <nu-icon name={name} {...otherProps}></nu-icon>;
};

export default Badge;
