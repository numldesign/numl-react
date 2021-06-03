import React from 'react';
import * as El from '@numl-react/elements';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/Button/Dropdown',
  component: Button,
};

const Template = function (args: any) {
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

export const Default: any = Template.bind({});
Default.args = {
  menu: 'Hello World!',
};

export const Special: any = Template.bind({});
Special.args = {
  menu: 'Hello World',
  theme: 'special',
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
