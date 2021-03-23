import T from 'prop-types';
import React from 'react';
import { TCardProps } from './Card.type';

function Card(allProps: TCardProps) {
  const {
    heading,
    subheading,
    body,
    headerActions,
    footerActions,
    bodyActions,
    children,
    ...otherProps
  } = allProps;
  return (
    <nu-card padding="0" {...otherProps}>
      <nu-flow padding="2x" gap="1x">
        {heading && (
          <nu-pane>
            <nu-block flex="1" size="md" text="sb" color="#text-soft">
              {heading}
            </nu-block>
            {headerActions}
          </nu-pane>
        )}
        {body ? (
          <nu-pane items="flex-start">
            <nu-block flex="1">
              {subheading ? <nu-block size="xs">{subheading}</nu-block> : null}
              <nu-block size="sm">{body}</nu-block>
            </nu-block>
            {bodyActions}
          </nu-pane>
        ) : null}
      </nu-flow>
      {children}
      {footerActions ? (
        <nu-pane content="flex-end" gap="1x" padding="2x">
          {footerActions}
        </nu-pane>
      ) : null}
    </nu-card>
  );
}

Card.propTypes = {
  heading: T.string,
  subheading: T.string,
  body: T.string,
  headerActions: T.any,
  footerActions: T.any,
  bodyActions: T.any,
};

export default Card;