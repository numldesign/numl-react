import React from 'react';
import * as El from '@numl-react/elements';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/Button/Dropdown Without Icon',
  component: Button,
};

const Template = function (args: any) {
  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75" />
      <El.ThemeProvider name="secondary" hue="240" saturation="75" />

      <El.BaseElement padding="2x">
        <Button.Small {...args}>Button</Button.Small>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Medium {...args}>Button</Button.Medium>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.Large {...args}>Button</Button.Large>
      </El.BaseElement>

      <El.BaseElement padding="2x">
        <Button.ExtraLarge {...args}>Button</Button.ExtraLarge>
      </El.BaseElement>
    </El.NumlProvider>
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
