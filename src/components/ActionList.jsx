import React, { useEffect, useRef } from 'react';

export default function ActionList(allProps) {
  const ref = useRef();

  const { header, defaultValue, onChange, children, ...otherProps } = allProps;

  useEffect(() => {
    if (ref.current && onChange) {
      ref.current.addEventListener('input', (evt) => onChange(evt.detail));
    }
  }, []);

  return (
    <nu-listbox ref={ref} value={defaultValue} {...otherProps}>
      {header ? (
        <nu-option use-actions="n" border="bottom">
          {header}
        </nu-option>
      ) : null}
      {children}
    </nu-listbox>
  );
}

ActionList.Item = function ActionItem(allProps) {
  const { children, ...otherProps } = allProps;

  return <nu-option {...otherProps}>{children}</nu-option>;
};
