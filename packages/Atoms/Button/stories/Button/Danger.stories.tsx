import React from 'react';
import * as El from '@numl-react/elements';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/Button/Danger',
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
Normal.args = {
  theme: 'danger',
};

export const Hover: any = Template.bind({});
Hover.args = {
  'is-hover': true,
  theme: 'danger',
};

export const Pressed: any = Template.bind({});
Pressed.args = {
  'is-active': true,
  theme: 'danger',
};

export const Toggled: any = Template.bind({});
Toggled.args = {
  'is-pressed': true,
  theme: 'danger',
};

export const outline: any = Template.bind({});
outline.args = {
  outline: 'true',
  theme: 'danger',
};

export const Disabled: any = Template.bind({});
Disabled.args = {
  disabled: true,
  theme: 'danger',
};
