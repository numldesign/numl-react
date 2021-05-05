import React from 'react';
import { El } from '../../../Core';

function CalloutCard(allProps: any): JSX.Element {
  const { heading, description, actions, padding = '2x', src, ...otherProps } = allProps;
  return (
    <El.Card padding={padding} {...otherProps}>
      <El.Grid columns="auto" content="space-between">
        {src ? (
          <El.Base row="1">
            <El.Image width="100%" fit="fill" src={src}></El.Image>
          </El.Base>
        ) : null}
        {heading ? (
          <El.Base size="md" row="2" padding="0.5x 0">
            {heading}
          </El.Base>
        ) : null}
        {description ? (
          <El.Base size="sm" row="3" padding="0.5x 0">
            {description}
          </El.Base>
        ) : null}
        {actions ? (
          <El.Base size="xs" row="4" padding="0.5x 0">
            {actions}
          </El.Base>
        ) : null}
      </El.Grid>
    </El.Card>
  );
}

CalloutCard.Landscape = function CalloutCardLandScape(props: any) {
  const { children, src, heading, actions, description, ...otherProps } = props;
  return (
    <El.Card block {...otherProps}>
      <El.Grid responsive="800px|801px" columns="auto auto|auto" gap="1" content="space-between">
        {heading || description ? (
          <El.Block column="1|1" row="1|2">
            <El.Base block text="sb" padding="0.5x 0">
              {heading}
            </El.Base>
            <El.Base block size="sm" padding="0.5x 0">
              {description}
            </El.Base>
            {actions ? <El.Base padding="1x 0">{actions}</El.Base> : null}
          </El.Block>
        ) : null}
        {src ? <El.Image column="2|1" row="1|1" height="auto" src={src}></El.Image> : null}
      </El.Grid>
    </El.Card>
  );
};

export default CalloutCard;
