import React from 'react';
import T from 'prop-types';
import ActionElement from './Action';

export default function Checkbox(allProps) {
  let { checked, disabled, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return ActionElement({ as: 'nu-checkbox', checked, disabled, ...otherProps });
}

Checkbox.Field = function CheckboxField(allProps) {
  let { checked, disabled, id, children, ...otherProps } = allProps;

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
     { children ? <nu-label for={id}>{children}</nu-label> : ''}
  </nu-field>;
}

Checkbox.propTypes = {
  ...ActionElement.propTypes,
  checked: T.bool,
};
