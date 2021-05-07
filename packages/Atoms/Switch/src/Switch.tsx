import React from 'react';
import { El } from '@numl-react/core';

function Switch(allProps: any) {
  let { checked, disabled, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;
  return <El.Switch checked={checked} disabled={disabled} {...otherProps}></El.Switch>;
}

Switch.Field = function SwitchField(allProps: any) {
  let { checked, disabled, id, children, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return (
    <El.Field display="flex" flow="row" items="center start" gap="1x" {...otherProps}>
      <El.Switch checked={checked} disabled={disabled} id={id} {...otherProps}></El.Switch>;
      {children ? <El.Label for={id}>{children}</El.Label> : ''}
    </El.Field>
  );
};

export default Switch;
