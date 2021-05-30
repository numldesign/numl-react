import React from 'react';
import { El } from '@numl-react/core';

function Checkbox(allProps: any): JSX.Element {
  const {
    id,
    onTap,
    label,
    items = 'center start',
    onInput,
    value,
    gap = '1x',
    ...otherProps
  } = allProps;

  return (
    <El.Pane items={items} gap={gap} {...otherProps}>
      <El.Checkbox
        id={id}
        onTap={onTap}
        onInput={onInput}
        value={value}
        {...otherProps}
      />
      {label && typeof label === 'string' ? (
        <Checkbox.Label>{label}</Checkbox.Label>
      ) : (
        label
      )}
    </El.Pane>
  );
}

Checkbox.Label = function CheckboxLabel(props: any) {
  const { id, children, color = 'text', ...otherProps } = props;
  return (
    <El.Label for={id} color={color} {...otherProps}>
      {children}
    </El.Label>
  );
};

export default Checkbox;
