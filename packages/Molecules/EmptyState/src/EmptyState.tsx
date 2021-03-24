import React from 'react';
import { TEmptyStateProps } from './EmptyState.type';

function EmptyState(allProps: TEmptyStateProps): JSX.Element {
  const { heading, description, actions, children, ...otherProps } = allProps;

  return (
    <nu-pane flow="column" radius="1x" {...otherProps}>
      {children}
      {heading ? (
        <nu-block size="xl" text="center">
          {heading}
        </nu-block>
      ) : null}
      {description ? (
        <nu-block size="sm" color="#text-strong" text="center">
          {description}
        </nu-block>
      ) : null}
      <nu-flex gap="1x" flow="row wrap" content="center" size="sm">
        {actions}
      </nu-flex>
    </nu-pane>
  );
}

export default EmptyState;
