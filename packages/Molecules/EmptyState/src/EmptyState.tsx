import React from 'react';
import { TEmptyStateProps } from './EmptyState.type';

function EmptyState(allProps: TEmptyStateProps): JSX.Element {
  const { heading, description, flow = 'column', radius = '1x', actions, children, ...otherProps } = allProps;

  return (
    <nu-pane flow={flow} radius={radius} {...otherProps}>
      {children}
      {heading ? (
        <nu-block size="1.1" text="center">
          {heading}
        </nu-block>
      ) : null}
      {description ? (
        <nu-block size="0.7" color="#text-strong" text="center">
          {description}
        </nu-block>
      ) : null}
      {actions ? (
        <nu-flex gap="0.5" flow="row wrap" content="center">
          {actions}
        </nu-flex>
      ) : null}
    </nu-pane>
  );
}

export default EmptyState;
