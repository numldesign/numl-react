import T from 'prop-types';
import React from 'react';
import { El } from '../../../Core';
import { Action } from '../../../Elements/Action';
import { TCheckboxFieldProps, TCheckboxProps } from './Checkbox.type';

function Checkbox(allProps: TCheckboxProps): JSX.Element {
  let { checked, disabled, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return Action({ as: 'nu-checkbox', checked, disabled, ...otherProps });
}

Checkbox.Field = function CheckboxField(allProps: TCheckboxFieldProps): JSX.Element {
  let { checked, disabled, id, children, onTap, label, onInput, value, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return (
    <El.Field display="flex" flow="row" items="center start" gap="1x" {...otherProps}>
      {Action({
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
    </El.Field>
  );
};

Checkbox.Label = function CheckboxLabel(props: any) {
  const { id, children, theme = 'special', ...otherProps } = props;
  return (
    <El.Label for={id} color="white" {...otherProps}>
      {children}
    </El.Label>
  );
};

export default Checkbox;
