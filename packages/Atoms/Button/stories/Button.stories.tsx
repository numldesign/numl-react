import React from 'react';
import Root from '../../../Components/Root';
import { Button } from '../index';
import { Grid } from './../../../Components/Grid/';
import { Heading } from './../../../Components/Heading/src/Heading';

export default {
  title: 'Example/Atoms/Button',
  component: Button,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = function (props: any) {
  const { label, ...otherProps } = props;
  return (
    <Root>
      <Grid columns="auto" rows="1fr" gap>
        <Grid.Row row="1">
          <Grid.Column column="1" padding="0x 2x">
            <Heading.Two>Default</Heading.Two>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row row="2">
          <Grid.Column column="1" padding="0x 2x">
            <Button {...otherProps} gap padding="0.8x 1.2x">
              <Button.Label>{label}</Button.Label>
            </Button>
          </Grid.Column>

          <Grid.Column column="2" padding="0x 2x">
            <Button {...otherProps} gap padding="1x 2x">
              <Button.Label>{label}</Button.Label>
            </Button>
          </Grid.Column>

          <Grid.Column column="3" padding="0x 2x">
            <Button {...otherProps} gap padding="1.2x 1.2">
              <Button.Label>{label}</Button.Label>
              <Button.Icon name="chevron-down ^:pressed[chevron-up]"></Button.Icon>
            </Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row row="3">
          <Grid.Column column="1" padding="0x 2x">
            <Heading.Two>Special</Heading.Two>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row row="4">
          <Grid.Column column="1" padding="0x 2x">
            <Button {...otherProps} theme="special" gap padding="0.8x 1.2x">
              <Button.Label>{label}</Button.Label>
            </Button>
          </Grid.Column>

          <Grid.Column column="2" padding="0x 2x">
            <Button {...otherProps} theme="special" gap padding="1x 2x">
              <Button.Label>{label}</Button.Label>
            </Button>
          </Grid.Column>

          <Grid.Column column="3" padding="0x 2x">
            <Button {...otherProps} theme="special" gap padding="1.2x 1.2">
              <Button.Label>{label}</Button.Label>
              <Button.Icon name="chevron-down ^:pressed[chevron-up]"></Button.Icon>
            </Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row row="5">
          <Grid.Column column="1" padding="0x 2x">
            <Heading.Two>Danger</Heading.Two>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row row="6">
          <Grid.Column column="1" padding="0x 2x">
            <Button {...otherProps} theme="danger" gap padding="0.8x 1.2x">
              <Button.Label>{label}</Button.Label>
            </Button>
          </Grid.Column>

          <Grid.Column column="2" padding="0x 2x">
            <Button {...otherProps} theme="danger" gap padding="1x 2x">
              <Button.Label>{label}</Button.Label>
            </Button>
          </Grid.Column>

          <Grid.Column column="3" padding="0x 2x">
            <Button {...otherProps} theme="danger" gap padding="1.2x 1.2">
              <Button.Label>{label}</Button.Label>
              <Button.Icon name="chevron-down ^:pressed[chevron-up]"></Button.Icon>
            </Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row row="7">
          <Grid.Column column="1" padding="0x 2x">
            <Heading.Two>Warning</Heading.Two>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row row="8">
          <Grid.Column column="1" padding="0x 2x">
            <Button {...otherProps} theme="warning" gap padding="0.8x 1.2x">
              <Button.Label>{label}</Button.Label>
            </Button>
          </Grid.Column>

          <Grid.Column column="2" padding="0x 2x">
            <Button {...otherProps} theme="warning" gap padding="1x 2x">
              <Button.Label>{label}</Button.Label>
            </Button>
          </Grid.Column>

          <Grid.Column column="3" padding="0x 2x">
            <Button {...otherProps} theme="warning" gap padding="1.2x 1.2">
              <Button.Label>{label}</Button.Label>
              <Button.Icon name="chevron-down ^:pressed[chevron-up]"></Button.Icon>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Root>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Button',
};
