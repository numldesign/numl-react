import React, { useEffect, useRef } from 'react';
import { El } from '@numl-react/core';

function Tabs(allProps: any) {
  const ref: any = useRef();

  const { prefix, defaultValue, onChange, children, ...otherProps } = allProps;
  const content = prefix ? 'flex-start' : 'space-between';

  useEffect(() => {
    if (ref.current && onChange) {
      ref.current.addEventListener('input', (evt: any) => onChange(evt.detail));
    }
  }, []);

  return (
    <El.Block>
      <El.TabList ref={ref} content={content} value={defaultValue} {...otherProps}>
        {prefix}
        {children}
      </El.TabList>
      {children.map((child: any) => {
        return (
          <El.Block key={child.props.tab} id={child.props.tab}>
            {child.props.children}
          </El.Block>
        );
      })}
    </El.Block>
  );
}

Tabs.Item = function TabItem(allProps: any) {
  const { label, tab, prefix, suffix, ...otherProps } = allProps;
  return (
    <El.Tab content="center" value={tab} control={tab} trigger {...otherProps}>
      {prefix}
      {label}
      {suffix}
    </El.Tab>
  );
};

export default Tabs;
