import React from 'react';
import * as El from '@numl-react/elements';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/Button/States/Danger',
  component: Button,
};

const Template = function (args) {
  return (
    <>
      <El.BaseElement padding="2x">
        <Button.Small {...args} size="sm">
          Button
        </Button.Small>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Medium {...args} size="md">
          Button
        </Button.Medium>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Large {...args} size="lg">
          Button
        </Button.Large>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.ExtraLarge {...args} size="xl">
          Button
        </Button.ExtraLarge>
      </El.BaseElement>
    </>
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
