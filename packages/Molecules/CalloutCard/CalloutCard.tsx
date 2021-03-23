import React from 'react';
import { TCalloutCardProps } from './CalloutCard.type';

function CalloutCard(allProps: TCalloutCardProps): JSX.Element {
  const {
    heading,
    description,
    actions,
    extra,
    closeAction,
    ...otherProps
  } = allProps;
  return (
    <nu-pane
      fill="bg"
      gap="2x"
      padding="2x"
      border="1bw"
      radius="1x"
      items="start"
      {...otherProps}
    >
      <nu-flex flex="1" gap="2x" flow="column wrap">
        <nu-block text="sb">{heading}</nu-block>
        <nu-block size="sm">{description}</nu-block>
        <nu-block>{actions}</nu-block>
      </nu-flex>
      {extra}
      {closeAction ? closeAction : null}
    </nu-pane>
  );
}

export default CalloutCard;