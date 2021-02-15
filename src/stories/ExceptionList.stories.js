import React from 'react';
import Root from '../components/Root';
import ExceptionList from '../components/ExceptionList';
import { THEMES, themeToProps } from '../helpers';

export default {
  title: 'Example/ExceptionList',
  component: ExceptionList,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
      },
    },
    theme: {
      defaultValue: undefined,
      control: {
        type: 'select',
        options: [undefined, ...THEMES],
      },
    },
    label: {
      defaultValue: 'Label',
      control: {
        type: 'text',
      },
    },
    title: {
      defaultValue: undefined,
      control: {
        type: 'text',
      },
    },
    iconName: {
      defaultValue: undefined,
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ theme, ...args }) => (
  <Root>
    <ExceptionList {...args} {...themeToProps(theme)} />
  </Root>
);

export const Default = Template.bind({});

Default.args = {
  theme: 'special',
  label: 'Label',
};

export const LabelWithIcon = Template.bind({});

LabelWithIcon.args = {
  theme: 'special',
  label: 'Label',
  iconName: 'reader-outline',
};

export const LabelWithIconTitle = Template.bind({});

LabelWithIconTitle.args = {
  theme: 'special',
  label: 'Label',
  title: 'Title',
  iconName: 'alert-circle-outline',
};
