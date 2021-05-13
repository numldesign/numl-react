import React from 'react';
import { El } from '@numl-react/core';

function Checkbox(allProps: any): JSX.Element {
  const { checked, disabled, children, ...otherProps } = allProps;

  return (
    <El.Checkbox checked={checked} disabled={disabled} {...otherProps}>
      {children}
    </El.Checkbox>
  );
}

Checkbox.Field = function CheckboxField(allProps: any): JSX.Element {
  const {
    checked,
    disabled,
    id,
    children,
    onTap,
    label,
    onInput,
    value,
    ...otherProps
  } = allProps;

  return (
    <El.Field
      display="flex"
      flow="row"
      items="center start"
      gap="1x"
      {...otherProps}
    >
      <El.Checkbox
        checked={checked}
        disabled={disabled}
        id={id}
        onTap={onTap}
        onInput={onInput}
        value={value}
      />
      {label && !children ? label : ''}
      {children || ''}
    </El.Field>
  );
};

Checkbox.Label = function CheckboxLabel(props: any) {
  const { id, children, ...otherProps } = props;
  return (
    <El.Label for={id} color="white" {...otherProps}>
      {children}
    </El.Label>
  );
};

export default Checkbox;
