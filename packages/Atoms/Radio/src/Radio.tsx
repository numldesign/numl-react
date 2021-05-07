import React, { useEffect, useRef } from 'react';
import { El } from '@numl-react/core';
import { TRadioFieldProps, TRadioGroupProps, TRadioProps } from './Radio.type';

function Radio(allProps: TRadioProps): JSX.Element {
  let { checked, disabled, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;
  return <El.Radio checked={checked} disabled={disabled} {...otherProps}></El.Radio>;
}

Radio.Group = function RadioGroup(allProps: TRadioGroupProps): JSX.Element {
  const ref: any = useRef();

  let { disabled, children, inline, onChange, ...otherProps } = allProps;

  disabled = !!disabled || null;
  inline = !!inline || null;

  useEffect(() => {
    if (ref.current && onChange) {
      ref.current.addEventListener('input', (evt: any) => onChange(evt.detail));
    }
  }, []);

  return (
    <El.RadioGroup
      ref={ref}
      disabled={disabled}
      gap="1x :inline[2x]"
      inline={inline}
      flow="column :inline[row]"
      {...otherProps}
    >
      {children}
    </El.RadioGroup>
  );
};

Radio.Field = function RadioField(allProps: TRadioFieldProps) {
  let { checked, disabled, id, label, children, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return (
    <El.Field display="flex" flow="row" items="center start" gap="1x" {...otherProps}>
      <El.Radio checked disabled id {...otherProps}></El.Radio>
      {children ? <El.Label for={id}>{children}</El.Label> : ''}
    </El.Field>
  );
};

export default Radio;
