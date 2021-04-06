import React from 'react';
import { Block } from './../../../Components/Block/';

function MediaCard(props) {
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
    <nu-card padding={padding} columns={columns} {...otherProps}>
      <nu-img src={src} width="100%" height="9.875rem"></nu-img>
      <nu-grid
        columns="auto 1fr"
        content="stretch end"
        items="stretch end"
        padding="2x 0x"
      >
        <nu-el text="bold">{heading}</nu-el>
        <nu-icon align-self="end" name="ellipsis-horizontal-outline"></nu-icon>
      </nu-grid>
      <nu-grid columns="auto" gap>
        {description ? <nu-el row="1">{description}</nu-el> : null}
        {action ? <Block row="2">{action}</Block> : null}
      </nu-grid>
    </nu-card>
  );
}

export default MediaCard;
