import React from 'react';
import { El } from '@numl-react/core';

function Switch(allProps: any) {
  const { checked, disabled } = allProps;

  return <El.Switch checked={checked} disabled={disabled} {...allProps} />;
}

Switch.Field = function SwitchField(allProps: any) {
  const { checked, disabled, id, children, ...otherProps } = allProps;

  return (
    <El.Field
      display="flex"
      flow="row"
      items="center start"
      gap="1x"
      {...otherProps}
    >
      <El.Switch
        checked={checked}
        disabled={disabled}
        id={id}
        {...otherProps}
      />
      {children ? <El.Label for={id}>{children}</El.Label> : ''}
    </El.Field>
  );
};

export default Switch;
