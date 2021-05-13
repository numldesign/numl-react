import React from 'react';
import { El } from '@numl-react/core';

function ColorModifier() {
  return (
    <El.Block padding>
      <El.Button radius="0.5rem" block width="min 100%">
        Modifiers
      </El.Button>
    </El.Block>
  );
}

class ColorSelector extends React.Component {
  colorBlock: any;

  ctx1: any;

  width1: any;

  height1: any;

  colorStrip: any;

  ctx2: any;

  width2: any;

  height2: any;

  x = 0;

  y = 0;

  drag = false;

  rgbaColor = 'rgba(255,0,0,1)';

  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
      columns: props.columns || 'auto',
      padding: props.padding || '2x 0x',
      items: props.items || 'center',
      gap: props.gap || '2x',
      content: props.content || 'center',
    };
    this.colorBlock = React.createRef();
    this.colorStrip = React.createRef();
  }

  // componentWillUnmount() {
  //   // Make sure to remove the DOM listener when the component is unmounted.
  //   // this.colorBlock.removeEventListener("mousedown", this.mousedown, false);
  //   // this.colorBlock.removeEventListener("mouseup", this.mouseup, false);
  //   // this.colorBlock.removeEventListener("mousemove", this.mousemove, false);
  // }

  componentDidMount() {
    // this.colorBlock.addEventListener("mousedown", this.mousedown, false);
    // this.colorBlock.addEventListener("mouseup", this.mouseup, false);
    // this.colorBlock.addEventListener("mousemove", this.mousemove, false);

    this.ctx1 = this.colorBlock.getContext('2d');
    this.width1 = this.colorBlock.width;
    this.height1 = this.colorBlock.height;
    this.ctx1.rect(0, 0, this.width1, this.height1);

    this.ctx2 = this.colorStrip.getContext('2d');
    this.width2 = this.colorStrip.width;
    this.height2 = this.colorStrip.height;
    this.ctx2.rect(0, 0, this.width2, this.height2);

    this.fillGradient();
    const grd1 = this.ctx2.createLinearGradient(0, 0, 0, this.height1);
    grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
    grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
    grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
    grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
    grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
    grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
    grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
    this.ctx2.fillStyle = grd1;
    this.ctx2.fill();
  }

  click(e: any) {
    console.log('click');
    this.x = e.offsetX;
    this.y = e.offsetY;
    const imageData = this.ctx2.getImageData(this.x, this.y, 1, 1).data;
    this.rgbaColor = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},1)`;
    this.fillGradient();
  }

  mousedown(e: any) {
    console.log('mousedown');
    this.drag = true;
    this.changeColor(e);
  }

  mousemove(e: any) {
    console.log('mousemove');
    if (this.drag) {
      this.changeColor(e);
    }
  }

  mouseup() {
    this.drag = false;
  }

  changeColor(e: any) {
    // console.log(this.rgbaColor);

    this.x = e.offsetX;
    this.y = e.offsetY;
    const imageData = this.ctx1.getImageData(this.x, this.y, 1, 1).data;
    this.rgbaColor = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},1)`;

    // this.setState({
    //   ctx1: this.ctx1,
    //   rgbaColor: this.rgbaColor,
    // });
    // console.log(this.rgbaColor);
  }

  fillGradient() {
    console.log(this.rgbaColor);
    this.ctx1.fillStyle = this.rgbaColor;
    this.ctx1.fillRect(0, 0, this.width1, this.height1);

    const grdWhite = this.ctx2.createLinearGradient(0, 0, this.width1, 0);
    grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
    grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
    this.ctx1.fillStyle = grdWhite;
    this.ctx1.fillRect(0, 0, this.width1, this.height1);

    const grdBlack = this.ctx2.createLinearGradient(0, 0, 0, this.height1);
    grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
    grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
    this.ctx1.fillStyle = grdBlack;
    this.ctx1.fillRect(0, 0, this.width1, this.height1);

    // this.setState({
    //   ctx1: this.ctx1,
    //   rgbaColor: this.rgbaColor,
    // });
  }

  render() {
    const tempState: any = this.state;
    return (
      <El.Grid
        columns={tempState.columns}
        padding={tempState.padding}
        items={tempState.items}
        gap={tempState.gap}
        content={tempState.content}
      >
        <El.RangeSlider2d
          column="1"
          width="15.375rem"
          height="15.375rem"
          radius="0.5rem"
          value="0,1"
          onClick={this.click}
          step="1"
          min="0"
          onDragEnd={this.mousedown}
          onDragStart={this.mouseup}
          onDragging={this.mousemove}
          max="255"
        >
          <canvas ref={this.colorBlock} width="246px" height="246px" />
        </El.RangeSlider2d>
        <El.RangeSlider
          column="2"
          height="15.375rem"
          min="0"
          max="255"
          orient="v"
          image="linear(to bottom, hue(0 s), hue(90 s), hue(180 s), hue(270 s), hue(0 s))"
        >
          <canvas ref={this.colorStrip} height="246px" width="10px" />
        </El.RangeSlider>
        <El.RangeSlider
          column="3"
          min="0"
          max="255"
          height="15.375rem"
          orient="v"
          image="linear(to bottom, white, transparent)"
        />
      </El.Grid>
    );
  }
}

function ColorCode(props: any) {
  return (
    <El.Block {...props} padding>
      <El.Grid columns="1fr 3fr 1fr" items="center" gap="2x" content="stretch">
        <El.Button column="1" height="2.25rem" toggle text="normal">
          <El.BaseElement>RGB</El.BaseElement>
          <El.Icon
            name="chevron-down ^:pressed[chevron-up]"
            size="md"
            text="normal"
          />
        </El.Button>
        <El.ButtonGroup column="2" height="2.25rem" value="rgb">
          <El.Grid columns="auto auto auto" items="center" content="stretch">
            <El.NumberInput
              precision="0"
              min="0"
              max="255"
              value="0"
              label="Number input"
            />
            <El.NumberInput
              precision="0"
              min="0"
              max="255"
              value="0"
              label="Number input"
            />
            <El.NumberInput
              precision="0"
              min="0"
              max="255"
              value="0"
              label="Number input"
            />
          </El.Grid>
        </El.ButtonGroup>
        <El.NumberInput
          precision="0"
          min="0"
          max="100"
          value="0"
          label="Percents input"
        />
      </El.Grid>
    </El.Block>
  );
}
function ColorPicker() {
  return (
    <El.Card block width="22rem">
      <ColorSelector />
      <ColorCode />
      <ColorModifier />
    </El.Card>
  );
}

export default ColorPicker;
