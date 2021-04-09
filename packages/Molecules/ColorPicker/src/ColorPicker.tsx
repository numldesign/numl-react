import React from 'react';

function ColorPicker(props) {
  return (
    <nu-card block width="22rem">
      <ColorSelector></ColorSelector>
      <ColorCode></ColorCode>
      <ColorModifier></ColorModifier>
    </nu-card>
  );
}

function ColorModifier(props) {
  return (
    <nu-block padding>
      <nu-btn radius="0.5rem" block width="min 100%">
        Modifiers
      </nu-btn>
    </nu-block>
  );
}

function ColorSelector(props: any) {
  return (
    <nu-grid columns="auto" padding="2x 0x" items="center" gap="2x" content="center">
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
    </nu-grid>
  );
}

function ColorCode(props) {
  return (
    <nu-block {...props} padding>
      <nu-grid columns="1fr 3fr 1fr " items="center" gap="2x" content="stretch">
        <nu-btn column="1" height="2.25rem" toggle text="normal">
          <nu-el>RGB</nu-el>
          <nu-icon name="chevron-down ^:pressed[chevron-up]" size="md" text="normal"></nu-icon>
        </nu-btn>
        <nu-btngroup column="2" height="2.25rem" value="rgb">
          <nu-numinput precision="0" min="0" max="255" value="0" label="Number input"></nu-numinput>
          <nu-numinput precision="0" min="0" max="255" value="0" label="Number input"></nu-numinput>
          <nu-numinput precision="0" min="0" max="255" value="0" label="Number input"></nu-numinput>
        </nu-btngroup>
        <nu-numinput
          column="3"
          height="2.25rem"
          value="100%"
          min="0"
          max="100"
          precision="0"
          label="Percents input"
        ></nu-numinput>
      </nu-grid>
    </nu-block>
  );
}

export default ColorPicker;
