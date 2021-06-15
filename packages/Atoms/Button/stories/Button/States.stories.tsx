import * as El from '@numl-react/elements';
import React from 'react';
import Button from '../../src/Button';

export default {
  title: 'Numl React/Atoms/Button/States',
  component: Button,
};

const Template = function (args) {
  return (
    <El.Flex gap="2x" flow="column">
      <El.Pane gap="2x">
        <Button.Small {...args} icon="swap-vertical-outline">
          Button
        </Button.Small>

        <Button.Medium {...args} icon="swap-vertical-outline">
          Button
        </Button.Medium>

        <Button.Large {...args} icon="swap-vertical-outline">
          Button
        </Button.Large>

        <Button.ExtraLarge {...args} icon="swap-vertical-outline">
          Button
        </Button.ExtraLarge>
      </El.Pane>
      <El.Pane gap="2x">
        <Button type="small" {...args} icon="swap-vertical-outline">
          Button
        </Button>

        <Button type="medium" {...args} icon="swap-vertical-outline">
          Button
        </Button>

        <Button type="large" {...args} icon="swap-vertical-outline">
          Button
        </Button>

        <Button type="extralarge" {...args} icon="swap-vertical-outline">
          Button
        </Button>
      </El.Pane>
    </El.Flex>
  );
};

export const Normal: any = Template.bind({});
Normal.args = {};

export const Hover: any = Template.bind({});
Hover.args = {
  'is-hover': true,
};

export const Pressed: any = Template.bind({});
Pressed.args = {
  'is-active': true,
};

export const Toggled: any = Template.bind({});
Toggled.args = {
  'is-pressed': true,
};

export const outline: any = Template.bind({});
outline.args = {
  outline: 'true',
};

export const Disabled: any = Template.bind({});
Disabled.args = {
  disabled: true,
};
