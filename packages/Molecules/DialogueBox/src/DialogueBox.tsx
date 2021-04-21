import React from 'react';
import { TDialogueBoxProps } from './DialogueBox.type';

function DialogueBox(allProps: TDialogueBoxProps) {
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
    <nu-flex nu-overlay place={place} fill={fill} box={box} gap={gap} radius={radius} {...otherProps}>
      {heading ? <nu-block text="sb">{heading}</nu-block> : null}
      {children ? <nu-block size="sm">{children}</nu-block> : null}
      <nu-pane content="flex-end">{actions}</nu-pane>
    </nu-flex>
  );
}

export default DialogueBox;
