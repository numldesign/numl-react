import React from 'react';
import Root from '../../../Components/Root';
import Button from '../src/Button';
import { Icon } from './../../Icon';

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
  const { label, ...args } = props;
  return (
    <Root>
      <Button {...args}>
        <Button.Label>{label}</Button.Label>
      </Button>

      <Button {...args}>
        <Button.Label>{label}</Button.Label>
      </Button>

      <Button {...args}>
        <Button.Label>{label}</Button.Label>
        <Icon name="chevron-down ^:pressed[chevron-up]"></Icon>
      </Button>
      <br />
      <br />
      <Button theme="special" padding="0.4 0.6" {...args}>
        <Button.Label>{label}</Button.Label>
      </Button>

      <Button theme="special" padding="0.5 1" {...args}>
        <Button.Label>{label}</Button.Label>
      </Button>

      <Button theme="special" padding="0.6 1.2" {...args}>
        <Button.Label>{label}</Button.Label>
        <Icon name="chevron-down ^:pressed[chevron-up]"></Icon>
      </Button>
      <br />
      <br />
      <Button theme="danger" padding="0.4 0.6" {...args}>
        <Button.Label>{label}</Button.Label>
      </Button>

      <Button theme="danger" padding="0.5 1" {...args}>
        <Button.Label>{label}</Button.Label>
      </Button>

      <Button theme="danger" special="special" padding="0.6 1.2" {...args}>
        <Button.Label>{label}</Button.Label>
        <Icon name="chevron-down ^:pressed[chevron-up]"></Icon>
      </Button>
    </Root>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Button',
};
