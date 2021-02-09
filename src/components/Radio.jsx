import React from 'react';
import ActionElement from './Action';

export default function Radio(allProps) {
  let { checked, disabled, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return ActionElement({ as: 'nu-radio', checked, disabled, ...otherProps });
}

Radio.propTypes = ActionElement.propTypes;
