import React from 'react';
import ActionElement from './Action';

export default function CheckboxField(allProps) {
  let { checked, disabled, id, label, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return <nu-field display="flex" flow="row" items="center start" gap="1x" {...otherProps}>
    {ActionElement({
      as: 'nu-checkbox',
      checked,
      disabled,
      id,
      ...otherProps,
    })}
    { label ? <nu-label>{label}</nu-label> : ''}
  </nu-field>;
}

CheckboxField.propTypes = ActionElement.propTypes;
