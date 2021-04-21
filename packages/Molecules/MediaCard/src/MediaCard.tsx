import React from 'react';
import { Block, Card, Image, Grid, Base, Icon } from './../../../entry';

function MediaCard(props: any) {
  const {
    src,
    action,
    heading,
    description,
    padding = '2x',
    columns = 'auto',
    ...otherProps
  } = props;
  return (
    <Card padding={padding} columns={columns} {...otherProps}>
      <Image src={src} width="100%" height="9.875rem"></Image>
      <Grid columns="auto 1fr" content="stretch end" items="stretch end" padding="2x 0x">
        <Base text="bold">{heading}</Base>
        <Icon align-self="end" name="ellipsis-horizontal-outline"></Icon>
      </Grid>
      <Grid columns="auto" gap>
        {description ? <Base row="1">{description}</Base> : null}
        {action ? <Block row="2">{action}</Block> : null}
      </Grid>
    </Card>
  );
}

export default MediaCard;
