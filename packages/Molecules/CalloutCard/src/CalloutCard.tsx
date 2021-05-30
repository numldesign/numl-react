import React from 'react';
import { El } from '@numl-react/core';

function CalloutCard(allProps: any): JSX.Element {
  const {
    heading,
    description,
    actions,
    gap = '2',
    padding = '2.5x',
    src,
    ...otherProps
  } = allProps;
  return (
    <El.Card flex flow="row unwrap" padding={padding} gap={gap} {...otherProps}>
      <El.Block padding>
        {src ? <El.Image width="100%" fit="fill" src={src} /> : null}
      </El.Block>
      <El.Block size="md" padding text="sb">
        {heading || null}
      </El.Block>
      {description ? (
        <El.Block size="sm" padding>
          {description || null}
        </El.Block>
      ) : null}
      {actions ? (
        <El.Flex padding gap>
          {actions}
        </El.Flex>
      ) : null}
    </El.Card>
  );
}

CalloutCard.Landscape = function CalloutCardLandScape(props: any) {
  const { src, heading, actions, description, ...otherProps } = props;
  return (
    <El.Card {...otherProps}>
      <El.Grid columns="50% 50%">
        {heading || description ? (
          <El.Grid content="start" gap>
            <El.Block padding text="sb">
              {heading}
            </El.Block>
            <El.Block padding content="start" size="sm">
              {description}
            </El.Block>
            <El.Flex padding gap>
              {actions || null}
            </El.Flex>
          </El.Grid>
        ) : null}
        {src ? (
          <El.Block padding="left">
            <El.Image height="100%" fit="fill" src={src} />
          </El.Block>
        ) : null}
      </El.Grid>
    </El.Card>
  );
};

export default CalloutCard;
