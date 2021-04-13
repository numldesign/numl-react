import T from 'prop-types';
import React from 'react';
import { ActionElement } from '../../../Elements/Action';
import { TCheckboxFieldProps, TCheckboxProps } from './Checkbox.type';

function Checkbox(allProps: TCheckboxProps): JSX.Element {
  let { checked, disabled, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return ActionElement({ as: 'nu-checkbox', checked, disabled, ...otherProps });
}

Checkbox.Field = function CheckboxField(allProps: TCheckboxFieldProps): JSX.Element {
  let { checked, disabled, id, children, onTap, label, onInput, value, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return (
    <nu-field display="flex" flow="row" items="center start" gap="1x" {...otherProps}>
      {ActionElement({
        as: 'nu-checkbox',
        checked,
        disabled,
        id,
        onTap,
        onInput,
        value, // if not pass value, onInput handler return only Boolean
      })}
      {label && !children ? label : ''}
      {children ? children : ''}
    </nu-field>
  );
};

Checkbox.Label = function CheckboxLabel(props) {
  const { id, children, ...otherProps } = props;
  return (
    <nu-label for={id} {...otherProps}>
      {children}
    </nu-label>
  );
};

Checkbox.propTypes = {
  ...ActionElement.propTypes,
  checked: T.bool,
};

export default Checkbox;
