import React from 'react';
import { El } from '@numl-react/core';

function CalloutCard(allProps: any): JSX.Element {
  const {
    heading,
    description,
    actions,
    gap = '2x',
    padding = '2.5x',
    src,
    ...otherProps
  } = allProps;
  return (
    <El.Card flex flow="row wrap" padding={padding} gap={gap} {...otherProps}>
      {src ? (
        <El.Block>
          <El.Image width="100%" fit="fill" src={src} />
        </El.Block>
      ) : null}
      {heading && typeof heading === 'string' ? (
        heading
      ) : (
        <El.Block size="md">{heading}</El.Block>
      )}
      {description && typeof description === 'string' ? (
        description
      ) : (
        <El.Block size="sm">{description}</El.Block>
      )}
      {actions || null}
    </El.Card>
  );
}

CalloutCard.Landscape = function CalloutCardLandScape(props: any) {
  const { src, heading, actions, description, ...otherProps } = props;
  return (
    <El.Card block {...otherProps}>
      <El.Grid
        responsive="800px|801px"
        columns="auto auto|auto"
        gap="1"
        content="space-between"
      >
        {heading || description ? (
          <El.Block column="1|1" row="1|2">
            <El.BaseElement block text="sb" padding="0.5x 0">
              {heading}
            </El.BaseElement>
            <El.BaseElement block size="sm" padding="0.5x 0">
              {description}
            </El.BaseElement>
            {actions ? (
              <El.BaseElement padding="1x 0">{actions}</El.BaseElement>
            ) : null}
          </El.Block>
        ) : null}
        {src ? (
          <El.Image column="2|1" row="1|1" height="auto" src={src} />
        ) : null}
      </El.Grid>
    </El.Card>
  );
};

export default CalloutCard;
