import React from 'react';
import { El } from '@numl-react/core';

function DialogueBox(allProps: any) {
  const {
    heading,
    place = 'inside',
    radius = '0.5',
    gap = '0.5',
    box = 'y',
    fill = '#dark.50',
    actions,
    children,
    ...otherProps
  } = allProps;
  return (
    <El.Flex nu-overlay place={place} fill={fill} box={box} gap={gap} radius={radius} {...otherProps}>
      {heading ? <El.Block text="sb">{heading}</El.Block> : null}
      {children ? <El.Block size="sm">{children}</El.Block> : null}
      <El.Pane content="flex-end">{actions}</El.Pane>
    </El.Flex>
  );
}

export default DialogueBox;
