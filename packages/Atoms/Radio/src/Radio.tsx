import T from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Action } from '../../../Elements/Action';
import { TRadioFieldProps, TRadioGroupProps, TRadioProps } from './Radio.type';

function Radio(allProps: TRadioProps): JSX.Element {
  let { checked, disabled, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return Action({ as: 'nu-radio', checked, disabled, ...otherProps });
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
    <nu-radiogroup
      ref={ref}
      disabled={disabled}
      gap="1x :inline[2x]"
      inline={inline}
      flow="column :inline[row]"
      {...otherProps}
    >
      {children}
    </nu-radiogroup>
  );
};

Radio.Field = function RadioField(allProps: TRadioFieldProps) {
  let { checked, disabled, id, label, children, ...otherProps } = allProps;

  checked = !!checked || null;
  disabled = !!disabled || null;

  return (
    <El.Field display="flex" flow="row" items="center start" gap="1x" {...otherProps}>
      {Action({
        as: 'nu-radio',
        checked,
        disabled,
        id,
        ...otherProps,
      })}
      {children ? <El.Label for={id}>{children}</El.Label> : ''}
    </El.Field>
  );
};

Radio.propTypes = {
  ...Action.propTypes,
  checked: T.bool,
};

export default Radio;
