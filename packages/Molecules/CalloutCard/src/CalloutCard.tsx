import { Button, El } from '@numl-react/core';
import React from 'react';

function CalloutCard(props: any): JSX.Element {
  const { src, heading, actions, description, ...otherProps } = props;
  return (
    <El.Card {...otherProps}>
      <El.Grid
        xl="1fr 1fr"
        lg="1fr 1fr"
        md="1fr 1fr"
        sm="1fr"
        xs="1fr"
        gap
        flow="row-reverse"
      >
        {heading || description ? (
          <El.Flex flow="column" gap column="1|||1" row="1|||2">
            <El.Block text="sb">{heading}</El.Block>
            <El.Block size="sm">{description}</El.Block>
            {actions ? (
              <Button.Group>{React.Children.toArray(actions)}</Button.Group>
            ) : null}
          </El.Flex>
        ) : null}
        {src ? (
          <El.Block padding="left" column="2|||1" row="1|||1">
            <El.Image height="100%" width="100%" fit="fill" src={src} />
          </El.Block>
        ) : null}
      </El.Grid>
    </El.Card>
  );
}

export default CalloutCard;
