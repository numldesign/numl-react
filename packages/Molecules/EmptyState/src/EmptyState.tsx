import React from 'react';
import { TEmptyStateProps } from './EmptyState.type';
import { Pane, Block, Flex } from '../../../entry';

function EmptyState(allProps: TEmptyStateProps): JSX.Element {
  const { heading, description, flow = 'column', radius = '1x', actions, children, ...otherProps } = allProps;

  return (
    <Pane flow={flow} radius={radius} {...otherProps}>
      {children}
      {heading ? (
        <Block size="md" text="center">
          {heading}
        </Block>
      ) : null}
      {description ? (
        <Block size="xs" color="#text-strong" text="center">
          {description}
        </Block>
      ) : null}
      {actions ? (
        <Flex gap="0.5" flow="row wrap" content="center">
          {actions}
        </Flex>
      ) : null}
    </Pane>
  );
}

export default EmptyState;
