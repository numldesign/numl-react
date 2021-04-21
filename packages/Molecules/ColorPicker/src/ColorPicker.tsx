import React from 'react';
import { Card, Block, Button, Grid, Input, Base, Icon } from '../../../entry';

function ColorPicker() {
  return (
    <Card block width="22rem">
      <ColorSelector></ColorSelector>
      <ColorCode></ColorCode>
      <ColorModifier></ColorModifier>
    </Card>
  );
}

function ColorModifier() {
  return (
    <Block padding>
      <Button radius="0.5rem" block width="min 100%">
        Modifiers
      </Button>
    </Block>
  );
}

function ColorSelector(props: any) {
  let {
    columns = 'auto',
    padding = '2x 0x',
    items = 'center',
    gap = '2x',
    content = 'center',
  } = props;
  return (
    <Grid columns={columns} padding={padding} items={items} gap={gap} content={content}>
      <nu-slider
        column="1"
        width="15.375rem"
        height="15.375rem"
        radius="0.5rem"
        min="0"
        max="255"
        orient="v"
        image="linear(to bottom, hue(0 s), hue(90 s), hue(90,transparent s), hue(270 s), hue(0 s))"
      ></nu-slider>
      <nu-slider
        column="2"
        height="15.375rem"
        min="0"
        max="255"
        orient="v"
        image="linear(to bottom, hue(0 s), hue(90 s), hue(180 s), hue(270 s), hue(0 s))"
      ></nu-slider>
      <nu-slider
        column="3"
        min="0"
        max="255"
        height="15.375rem"
        orient="v"
        image="linear(to bottom, white, transparent)"
      ></nu-slider>
    </Grid>
  );
}

function ColorCode(props: any) {
  return (
    <Block {...props} padding>
      <Grid columns="1fr 3fr 1fr " items="center" gap="2x" content="stretch">
        <Button column="1" height="2.25rem" toggle text="normal">
          <Base>RGB</Base>
          <Icon name="chevron-down ^:pressed[chevron-up]" size="md" text="normal"></Icon>
        </Button>
        <nu-buttongroup column="2" height="2.25rem" value="rgb">
          <Input.Number
            precision="0"
            min="0"
            max="255"
            value="0"
            label="Number input"
          ></Input.Number>
          <Input.Number
            precision="0"
            min="0"
            max="255"
            value="0"
            label="Number input"
          ></Input.Number>
          <Input.Number
            precision="0"
            min="0"
            max="255"
            value="0"
            label="Number input"
          ></Input.Number>
        </nu-buttongroup>
        <Input.Number
          column="3"
          height="2.25rem"
          value="100%"
          min="0"
          max="100"
          precision="0"
          label="Percents input"
        ></Input.Number>
      </Grid>
    </Block>
  );
}

export default ColorPicker;
