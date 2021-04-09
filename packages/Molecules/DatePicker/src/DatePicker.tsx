import React, { useEffect, useRef } from 'react';
import { TDatePickerProps } from './DatePicker.type';

function DatePicker(allProps: TDatePickerProps) {
  const ref: any = useRef();
  const { onChange, ...otherProps } = allProps;

  useEffect(() => {
    if (ref.current && onChange) {
      ref.current.addEventListener('input', (evt: InputEvent) => onChange(evt.detail));
    }
  }, []);

  return <nu-card ref={ref} use-datePicker width="min-content" {...otherProps} />;
}

export default DatePicker;
