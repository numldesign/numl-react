import React, { useEffect, useRef } from 'react';
import { El } from '@numl-react/core';

function Radio(allProps: any): JSX.Element {
  const { checked, disabled, ...otherProps } = allProps;

  return <El.Radio checked={checked} disabled={disabled} {...otherProps} />;
}

Radio.Group = function RadioGroup(allProps: any): JSX.Element {
  const ref: any = useRef();

  const { disabled, children, inline, onChange, ...otherProps } = allProps;

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

Radio.Field = function RadioField(allProps: any) {
  const { id, children, ...otherProps } = allProps;

  return (
    <El.Field
      display="flex"
      flow="row"
      items="center start"
      gap="1x"
      {...otherProps}
    >
      <El.Radio checked disabled id {...otherProps} />
      {children ? <El.Label for={id}>{children}</El.Label> : ''}
    </El.Field>
  );
};

export default Radio;
