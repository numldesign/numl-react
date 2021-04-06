import React from 'react';
import { TCardProps } from './Card.type';

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
        <nu-flow padding="2x" gap="1x">
          {heading && (
            <nu-pane>
              <nu-block flex="1" size="1" text="sb" color="#text-soft">
                {heading}
              </nu-block>
              {headerActions}
            </nu-pane>
          )}
          {body ? (
            <nu-pane items="flex-start">
              <nu-block flex="1">
                {subheading ? (
                  <nu-block size="xs">{subheading}</nu-block>
                ) : null}
                <nu-block size="sm">{body}</nu-block>
              </nu-block>
              {bodyActions}
            </nu-pane>
          ) : null}
        </nu-flow>
      ) : null}
      {children}
      {footerActions ? (
        <nu-pane content="flex-end" gap="0.3" padding="0.5">
          {footerActions}
        </nu-pane>
      ) : null}
    </nu-card>
  );
}

export default Card;
