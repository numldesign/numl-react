import React from 'react';
import { Card, El } from './../../../Core';

function MediaCard(props: any) {
  const { src, action, heading, description, padding = '2x', columns = 'auto', ...otherProps } = props;
  return (
    <Card padding={padding} columns={columns} {...otherProps}>
      <El.Image src={src} width="100%" height="9.875rem"></El.Image>
      <El.Grid columns="auto 1fr" content="stretch end" items="stretch end" padding="2x 0x">
        <El text="bold">{heading}</El>
        <El.Icon align-self="end" name="ellipsis-horizontal-outline"></El.Icon>
      </El.Grid>
      <El.Grid columns="auto" gap>
        {description ? <El row="1">{description}</El> : null}
        {action ? <El.Block row="2">{action}</El.Block> : null}
      </El.Grid>
    </Card>
  );
}

export default MediaCard;
