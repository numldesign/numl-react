import React, { useEffect, useRef } from 'react';
import { El } from '@numl-react/core';

const Tabs = (allProps: any) => {
  const {
    prefix,
    width = 'min 65',
    value,
    fill = 'bg',
    onChange,
    ...otherProps
  } = allProps;
  let { children } = otherProps;
  const ref: any = useRef();
  const content = prefix ? 'flex-start' : 'space-between';

  /** Convert to react children array */

  children = React.Children.toArray(children);

  useEffect(() => {
    if (ref.current && onChange) {
      ref.current.addEventListener('input', (evt: any) => onChange(evt.detail));
    }
  }, []);

  return (
    <El.Card padding="0" border radius>
      <El.TabList
        fill={fill}
        ref={ref}
        flex
        gap="2x"
        width={width}
        paddiing="0 2x"
        content={content}
        value={value}
        {...otherProps}
      >
        {prefix || null}
        {children}
      </El.TabList>
      {children.map((child: any) => (
        <El.Block
          padding="2x"
          key={child.props.tab}
          fill={fill}
          id={child.props.tab}
        >
          {child.props.children}
        </El.Block>
      ))}
    </El.Card>
  );
};

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
