import React, { useEffect, useRef } from 'react';

export default function DatePicker(allProps) {
  const ref = useRef();
  const { onChange, ...otherProps } = allProps;

  useEffect(() => {
    if (ref.current && onChange) {
      ref.current.addEventListener('input', (evt) => onChange(evt.detail));
    }
  }, []);

  return (
    <nu-card ref={ref} use-datePicker width="min-content" {...otherProps} />
  );
}
