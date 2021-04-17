import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import { Icon } from '../../Icon/';
import { ExceptionList } from '../index';

export default {
  title: 'Example/Atoms/ExceptionList',
  component: ExceptionList,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ title, label, icon, ...args }) => {
  let items = [{ title, label, icon }];
  return (
    <NumlProvider>
      <nu-theme hue="290" saturation="75"></nu-theme>
      <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
      <ExceptionList items={items} {...args} />
    </NumlProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  theme: 'special',
  title: 'Title',
  label: 'Label',
  icon: 'alert-circle-outline',
};

const Template2 = ({ title, label, icon, ...args }) => {
  let items = [{ title, label, icon }];
  return (
    <NumlProvider>
      <nu-theme hue="290" saturation="75"></nu-theme>
      <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
      <ExceptionList items={items} {...args} />
    </NumlProvider>
  );
};
export const LabelWithIcon = Template2.bind({});

LabelWithIcon.args = {
  theme: 'special',
  title: 'Title',
  label: 'Label',
  icon: <Icon name="reader-outline"></Icon>,
};

const Template3 = ({ title, label, icon, ...args }) => {
  let items = [{ title, label, icon }];
  return (
    <NumlProvider>
      <nu-theme hue="290" saturation="75"></nu-theme>
      <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
      <ExceptionList items={items} {...args} />
    </NumlProvider>
  );
};
export const LabelWithIconTitle = Template3.bind({});

LabelWithIconTitle.args = {
  theme: 'special',
  label: 'Label',
  title: 'Title',
  icon: 'reader-outline',
};
