import React from 'react';
import * as El from '@numl-react/elements';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/Button/Types',
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

export const Default: any = Template.bind({});
Default.args = {};

export const Special: any = Template.bind({});
Special.args = {
  special: true,
};

export const Clear: any = Template.bind({});
Clear.args = {
  clear: true,
};

export const Danger: any = Template.bind({});
Danger.args = {
  theme: 'danger',
};
