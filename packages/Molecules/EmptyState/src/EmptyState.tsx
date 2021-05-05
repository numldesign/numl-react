import React from 'react';
import { TEmptyStateProps } from './EmptyState.type';
import { El } from '../../../Core';

function EmptyState(allProps: TEmptyStateProps): JSX.Element {
  const { heading, description, flow = 'column', radius = '1x', actions, children, ...otherProps } = allProps;

  return (
    <El.Pane flow={flow} radius={radius} {...otherProps}>
      {children}
      {heading ? (
        <El.Block size="md" text="center">
          {heading}
        </El.Block>
      ) : null}
      {description ? (
        <El.Block size="xs" color="#text-strong" text="center">
          {description}
        </El.Block>
      ) : null}
      {actions ? (
        <El.Flex gap="0.5" flow="row wrap" content="center">
          {actions}
        </El.Flex>
      ) : null}
    </El.Pane>
  );
}

export default EmptyState;
