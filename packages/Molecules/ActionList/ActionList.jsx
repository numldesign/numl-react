import React from 'react';

export default function ActionList(allProps) {
  const { header, children, ...otherProps } = allProps;

  return (
    <nu-menu border="1bw" padding="0" {...otherProps}>
      {header ? (
        <nu-block padding="1x 1.6x" text="sb" border="bottom">
          {header}
        </nu-block>
      ) : null}
      {children}
    </nu-menu>
  );
}

ActionList.Item = function ActionItem(allProps) {
  const { children, ...otherProps } = allProps;

  return (
    <nu-menuitem content="start" {...otherProps}>
      {children}
    </nu-menuitem>
  );
};
