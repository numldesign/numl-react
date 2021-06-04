import React, { useEffect, useRef } from 'react';
import { Card } from '@numl-react/elements';

function DatePicker(allProps: any): JSX.Element {
  const ref: any = useRef();
  const { onChange, ...otherProps } = allProps;

  useEffect(() => {
    if (ref.current && onChange) {
      ref.current.addEventListener('input', (evt: InputEvent) =>
        onChange(evt.detail)
      );
    }
  }, []);

  return <Card ref={ref} use-datePicker width="min-content" {...otherProps} />;
}

export default DatePicker;
