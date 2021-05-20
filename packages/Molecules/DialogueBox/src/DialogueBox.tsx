import React from 'react';
import { El } from '@numl-react/core';

function DialogueBox(allProps: any): JSX.Element {
  const {
    heading,
    place = 'inside',
    gap = '1x',
    radius = '0.5x',
    padding = '1.25',
    actions,
    children,
    ...otherProps
  } = allProps;
  return (
    <El.Card
      nu-overlay
      flex
      place={place}
      gap={gap}
      padding={padding}
      radius={radius}
      {...otherProps}
    >
      <El.Block text="sb">{heading || null}</El.Block>
      <El.Block size="sm">{children || null}</El.Block>
      <El.Pane content="flex-end">{actions}</El.Pane>
    </El.Card>
  );
}

export default DialogueBox;
