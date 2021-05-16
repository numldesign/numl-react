import React from 'react';
import { ThemeProvider, NumlProvider, El } from '@numl-react/core';
import { Button } from '../../index';

export default {
  title: 'Example/Atoms/ButtonGroup/Basic',
  component: Button.Group,
};

const Template = (args: any) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Button.Group {...args} />
  </NumlProvider>
);

export const Basic: any = Template.bind({});
Basic.args = {
  children: [
    <Button.Large key="one">Button</Button.Large>,
    <Button.Large key="two">Button</Button.Large>,
    <Button.Large key="three">Button</Button.Large>,
  ],
};
