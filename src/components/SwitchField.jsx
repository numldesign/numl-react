import React from 'react';
import ActionElement from './Action';

export default function SwitchField(allProps) {
  let { checked, disabled, id, label, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return <nu-field display="flex" flow="row" items="center start" gap="1x" {...otherProps}>
    {ActionElement({
      as: 'nu-switch',
      checked,
      disabled,
      id,
      ...otherProps,
    })}
    { label ? <nu-label>{label}</nu-label> : ''}
  </nu-field>;
}

SwitchField.propTypes = ActionElement.propTypes;
