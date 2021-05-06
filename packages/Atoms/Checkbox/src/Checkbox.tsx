import React from 'react';
import { El } from '../../../Core';
import { TCheckboxFieldProps, TCheckboxProps } from './Checkbox.type';

function Checkbox(allProps: TCheckboxProps): JSX.Element {
  let { checked, disabled, children, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;
  return (
    <El.Checkbox checked={checked} disabled={disabled} {...otherProps}>
      {children}
    </El.Checkbox>
  );
}

Checkbox.Field = function CheckboxField(allProps: TCheckboxFieldProps): JSX.Element {
  let { checked, disabled, id, children, onTap, label, onInput, value, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return (
    <El.Field display="flex" flow="row" items="center start" gap="1x" {...otherProps}>
      <El.Checkbox
        checked={checked}
        disabled={disabled}
        id={id}
        onTap={onTap}
        onInput={onInput}
        value={value}
      ></El.Checkbox>
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
