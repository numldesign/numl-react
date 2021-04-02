import React from 'react';
import Root from '../../../Components/Root';
import Button from '../src/Button';

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

const Template = ({ label, ...args }) => (
  <Root>
    <Button {...args}>
      <Button.Label>{label}</Button.Label>
    </Button>

    <Button
      showDropdown={
        <nu-icon name="chevron-down ^:pressed[chevron-up]"></nu-icon>
      }
      {...args}
    >
      <Button.Label>{label}</Button.Label>
    </Button>

    <Button
      showDropdown={
        <nu-icon name="chevron-down ^:pressed[chevron-up]"></nu-icon>
      }
      {...args}
    >
      <Button.Label>{label}</Button.Label>
    </Button>
    <br />
    <br />
    <Button theme="special" padding="0.4 0.6" {...args}>
      <Button.Label>{label}</Button.Label>
    </Button>

    <Button
      theme="special"
      padding="0.5 1"
      showDropdown={
        <nu-icon name="chevron-down ^:pressed[chevron-up]"></nu-icon>
      }
      {...args}
    >
      <Button.Label>{label}</Button.Label>
    </Button>

    <Button
      theme="special"
      padding="0.6 1.2"
      showDropdown={
        <nu-icon name="chevron-down ^:pressed[chevron-up]"></nu-icon>
      }
      {...args}
    >
      <Button.Label>{label}</Button.Label>
    </Button>
    <br />
    <br />
    <Button theme="danger" padding="0.4 0.6" {...args}>
      <Button.Label>{label}</Button.Label>
    </Button>

    <Button
      theme="danger"
      padding="0.5 1"
      showDropdown={
        <nu-icon name="chevron-down ^:pressed[chevron-up]"></nu-icon>
      }
      {...args}
    >
      <Button.Label>{label}</Button.Label>
    </Button>

    <Button
      theme="danger"
      special="special"
      padding="0.6 1.2"
      showDropdown={
        <nu-icon name="chevron-down ^:pressed[chevron-up]"></nu-icon>
      }
      {...args}
    >
      <Button.Label>{label}</Button.Label>
    </Button>
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
