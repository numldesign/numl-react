import React from 'react';
import * as El from '@numl-react/elements';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/Button/Dropdown',
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

export const Default: any = Template.bind({});
Default.args = {
  menu: 'Hello World',
};

export const Special: any = Template.bind({});
Special.args = {
  menu: 'Hello World',
  special: true,
};

export const Clear: any = Template.bind({});
Clear.args = {
  menu: 'Hello World',
  clear: true,
};

export const Danger: any = Template.bind({});
Danger.args = {
  menu: 'Hello World',
  theme: 'danger',
};
