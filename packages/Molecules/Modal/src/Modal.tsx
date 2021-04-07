import React from 'react';
import { TModalProps } from './Modal.type';

function Modal(allProps: TModalProps) {
  const {
    heading,
    place = 'inside',
    fill = '#dark.50',
    box = 'y',
    radius = '0.5',
    body,
    footerActions,
    closeAction,
    ...otherProps
  } = allProps;

  return (
    <nu-block
      nu-overlay
      place={place}
      fill={fill}
      box={box}
      radius={radius}
      {...otherProps}
    >
      {heading ? (
        <nu-pane
          padding="2x"
          border="bottom"
          items="start"
          content="space-between"
        >
          {heading}
          {closeAction}
        </nu-pane>
      ) : null}
      {body ? (
        <nu-pane
          padding="2x"
          border="bottom"
          items="start"
          content="space-between"
        >
          {body}
          {!heading ? closeAction : null}
        </nu-pane>
      ) : null}
      {footerActions ? (
        <nu-pane content="flex-end" gap="1x" padding="2x">
          {footerActions}
        </nu-pane>
      ) : null}
    </nu-block>
  );
}

export default Modal;
