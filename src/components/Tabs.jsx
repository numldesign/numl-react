import React, { useEffect, useRef } from 'react';

import T from 'prop-types';

export default function Tabs(allProps) {
  const ref = useRef();

  const { prefix, defaultValue, onChange, children, ...otherProps } = allProps;
  const content = prefix ? 'flex-start' : 'space-between';

  useEffect(() => {
    if (ref.current && onChange) {
      ref.current.addEventListener('input', (evt) => onChange(evt.detail));
    }
  }, []);

  return (
    <nu-block>
      <nu-tablist
        ref={ref}
        content={content}
        value={defaultValue}
        {...otherProps}
      >
        {prefix}
        {children}
      </nu-tablist>
      {children.map((child) => {
        return (
          <nu-block key={child.props.tab} id={child.props.tab}>
            {child.props.children}
          </nu-block>
        );
      })}
    </nu-block>
  );
}

Tabs.Item = function TabItem(allProps) {
  const { label, tab, prefix, suffix, ...otherProps } = allProps;
  return (
    <nu-tab content="center" value={tab} control={tab} trigger {...otherProps}>
      {prefix}
      {label}
      {suffix}
    </nu-tab>
  );
};

Tabs.propTypes = {
  prefix: T.oneOfType([T.string, T.element]),
  defaultValue: T.string,
  onChange: T.func,
};
