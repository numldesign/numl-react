import React from 'react';

export default function CalloutCard(allProps) {
  const {
    heading,
    description,
    actions,
    extra,
    closeAction,
    ...otherProps
  } = allProps;
  return (
    <nu-pane
      fill="bg"
      gap="2x"
      padding="2x"
      border="1bw"
      radius="1x"
      items="start"
      {...otherProps}
    >
      <nu-grid flex="2" gap="2x">
        <nu-block text="sb">{heading}</nu-block>
        <nu-block size="sm">{description}</nu-block>
        <nu-block>{actions}</nu-block>
      </nu-grid>
      {extra}
      {closeAction ? closeAction : null}
    </nu-pane>
  );
}
