import React from 'react';
import { NumlProvider, ThemeProvider, Button, Grid, Heading } from '../../../entry';

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
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75"></ThemeProvider>
      <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
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
            <Button {...otherProps} special gap padding="0.8x 1.2x">
              <Button.Label>{label}</Button.Label>
            </Button>
          </Grid.Column>

          <Grid.Column column="2" padding="0x 2x">
            <Button {...otherProps} special gap padding="1x 2x">
              <Button.Label>{label}</Button.Label>
            </Button>
          </Grid.Column>

          <Grid.Column column="3" padding="0x 2x">
            <Button {...otherProps} special gap padding="1.2x 1.2">
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
    </NumlProvider>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Button',
};
