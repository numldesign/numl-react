import React from 'react';
import * as El from '@numl-react/elements';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/Button/Icons',
  component: Button,
};

const Template = function (args: any) {
  return (
    <>
      <El.BaseElement padding="2x">
        <Button.Small {...args} icon="swap-vertical-outline">
          Button
        </Button.Small>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Medium {...args} icon="swap-vertical-outline">
          Button
        </Button.Medium>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Large {...args} icon="swap-vertical-outline">
          Button
        </Button.Large>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.ExtraLarge {...args} icon="swap-vertical-outline">
          Button
        </Button.ExtraLarge>
      </El.BaseElement>
    </>
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
