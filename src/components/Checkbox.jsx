import React from 'react';
import ActionElement from './Action';

export default function Checkbox(allProps) {
  let { checked, disabled, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return ActionElement({ as: 'nu-checkbox', checked, disabled, ...otherProps });
}

Checkbox.propTypes = ActionElement.propTypes;
