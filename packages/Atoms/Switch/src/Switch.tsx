import React from 'react';
import { Action } from '../../../Elements/Action';
import { TSwitchFieldProps, TSwitchProps } from './Switch.type';

function Switch(allProps: TSwitchProps) {
  let { checked, disabled, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return Action({ as: 'nu-switch', checked, disabled, ...otherProps });
}

Switch.Field = function SwitchField(allProps: TSwitchFieldProps) {
  let { checked, disabled, id, children, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return (
    <El.Field display="flex" flow="row" items="center start" gap="1x" {...otherProps}>
      {Action({
        as: 'nu-switch',
        checked,
        disabled,
        id,
        ...otherProps,
      })}
      {children ? <El.Label for={id}>{children}</El.Label> : ''}
    </El.Field>
  );
};

export default Switch;
