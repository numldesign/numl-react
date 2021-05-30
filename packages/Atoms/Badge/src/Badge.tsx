import React from 'react';
import * as El from '@numl-react/elements';

function Badge(allProps: any): JSX.Element {
  const { children = undefined, size, label, icon, ...otherProps } = allProps;
  return (
    <El.Badge radius="4x" padding="0.33rem 0.67rem" {...otherProps}>
      {typeof icon === 'string' ? <El.Icon padding="0" name={icon} /> : icon}
      <Badge.Label size={size}>{children || label}</Badge.Label>
    </El.Badge>
  );
}

Badge.Label = function BadgeLabel(props: any): JSX.Element {
  const { children, size, ...otherProps } = props;
  return (
    <El.BaseElement size={size} {...otherProps}>
      {children}
    </El.BaseElement>
  );
};

Badge.Icon = function BadgeIcon(props: any): JSX.Element {
  const { name, ...otherProps } = props;
  return <El.Icon name={name} padding="0" {...otherProps} />;
};

export default Badge;
