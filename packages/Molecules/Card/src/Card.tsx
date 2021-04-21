import React from 'react';
import { TCardProps } from './Card.type';
import { Flow, Block, Pane } from '../../../entry';

function Card(allProps: TCardProps) {
  const {
    heading,
    subheading,
    body,
    padding = '0',
    headerActions,
    footerActions,
    bodyActions,
    children,
    ...otherProps
  } = allProps;
  return (
    <nu-card padding={padding} {...otherProps}>
      {heading || body ? (
        <Flow padding="2x" gap="1x">
          {heading && (
            <Pane>
              <Block flex="1" size="1" text="sb" color="#text-soft">
                {heading}
              </Block>
              {headerActions}
            </Pane>
          )}
          {body ? (
            <Pane items="flex-start">
              <Block flex="1">
                {subheading ? <Block size="xs">{subheading}</Block> : null}
                <Block size="sm">{body}</Block>
              </Block>
              {bodyActions}
            </Pane>
          ) : null}
        </Flow>
      ) : null}
      {children}
      {footerActions ? (
        <Pane content="flex-end" gap="0.3" padding="0.5">
          {footerActions}
        </Pane>
      ) : null}
    </nu-card>
  );
}

export default Card;
