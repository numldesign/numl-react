import * as El from '@numl-react/elements';
import React, { useEffect, useRef } from 'react';

function Radio(allProps: any): JSX.Element {
  const { label, size, value, children, ...otherProps } = allProps;

  return (
    <El.Flex gap>
      <El.Radio inline size={size} {...otherProps} value={value} />
      {label && typeof label === 'string' ? (
        <El.Label inline size={size}>
          {label}
        </El.Label>
      ) : (
        label
      )}
    </El.Flex>
  );
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

Radio.List = function RadioList(allProps: any) {
  const { list, value, ...otherProps } = allProps;

  return (
    <El.Field>
      <Radio.Group value={value}>
        {list && typeof list === 'object' && list.length > 0
          ? React.Children.toArray(
              list.map((item: any) => (
                <Radio label={item.label} value={item.value} {...otherProps} />
              ))
            )
          : null}
      </Radio.Group>
    </El.Field>
  );
};

export default Radio;
