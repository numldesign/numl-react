import React from 'react';
import { El } from '@numl-react/core';

function Badge(allProps: any): JSX.Element {
  const { children, size, label, icon, ...otherProps } = allProps;
  return (
    <El.Badge radius="4x" padding="0.33rem 0.67rem" {...otherProps}>
      {typeof icon === 'string' ? <El.Icon name={icon} /> : icon}
      {children ? children : <Badge.Label size={size}>{label}</Badge.Label>}
    </El.Badge>
  );
}

Badge.Label = function BadgeLabel(props: any): JSX.Element {
  let { children, size, ...otherProps } = props;
  return (
    <El.BaseElement size={size} {...otherProps}>
      {children}
    </El.BaseElement>
  );
};

Badge.Icon = function BadgeIcon(props: any): JSX.Element {
  let { name, ...otherProps } = props;
  return <El.Icon name={name} {...otherProps}></El.Icon>;
};

export default Badge;
