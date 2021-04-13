import T from 'prop-types';
import React from 'react';
import { ActionElement } from '../../../Elements/Action';
import { TSwitchFieldProps, TSwitchProps } from './Switch.type';

function Switch(allProps: TSwitchProps) {
  let { checked, disabled, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return ActionElement({ as: 'nu-switch', checked, disabled, ...otherProps });
}

Switch.Field = function SwitchField(allProps: TSwitchFieldProps) {
  let { checked, disabled, id, children, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return (
    <nu-field display="flex" flow="row" items="center start" gap="1x" {...otherProps}>
      {ActionElement({
        as: 'nu-switch',
        checked,
        disabled,
        id,
        ...otherProps,
      })}
      {children ? <nu-label for={id}>{children}</nu-label> : ''}
    </nu-field>
  );
};

Switch.propTypes = {
  ...ActionElement.propTypes,
  checked: T.bool,
};

export default Switch;
