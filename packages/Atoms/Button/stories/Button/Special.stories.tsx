import React from 'react';
import * as El from '@numl-react/elements';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/Button/States/special',
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
  special: true,
};

export const Hover: any = Template.bind({});
Hover.args = {
  'is-hover': true,
  special: true,
};

export const Pressed: any = Template.bind({});
Pressed.args = {
  'is-active': true,
  special: true,
};

export const Toggled: any = Template.bind({});
Toggled.args = {
  'is-pressed': true,
  special: true,
};

export const outline: any = Template.bind({});
outline.args = {
  outline: 'true',
  special: true,
};

export const Disabled: any = Template.bind({});
Disabled.args = {
  disabled: true,
};
