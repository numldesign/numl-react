import React from 'react';
import { El } from '@numl-react/core';

function CalloutCard(allProps: any): JSX.Element {
  const {
    heading,
    description,
    actions,
    padding = '2x',
    src,
    ...otherProps
  } = allProps;
  return (
    <El.Card padding={padding} {...otherProps}>
      <El.Grid columns="auto" content="space-between">
        {src ? (
          <El.BaseElement row="1">
            <El.Image width="100%" fit="fill" src={src} />
          </El.BaseElement>
        ) : null}
        {heading ? (
          <El.BaseElement size="md" row="2" padding="0.5x 0">
            {heading}
          </El.BaseElement>
        ) : null}
        {description ? (
          <El.BaseElement size="sm" row="3" padding="0.5x 0">
            {description}
          </El.BaseElement>
        ) : null}
        {actions ? (
          <El.BaseElement size="xs" row="4" padding="0.5x 0">
            {actions}
          </El.BaseElement>
        ) : null}
      </El.Grid>
    </El.Card>
  );
}

CalloutCard.Landscape = function CalloutCardLandScape(props: any) {
  const { children, src, heading, actions, description, ...otherProps } = props;
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
