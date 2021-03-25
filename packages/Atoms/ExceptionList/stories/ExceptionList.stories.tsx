import React from 'react';
import Root from '../../../Components/Root';
import { THEMES, themeToProps } from '../../../helpers';
import { Icon } from '../../Icon/';
import { ExceptionList } from '../index';

export default {
  title: 'Example/Atoms/ExceptionList',
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
    icon: {
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
  icon: 'alert-circle-outline',
};

export const LabelWithIcon = Template.bind({});

LabelWithIcon.args = {
  theme: 'special',
  label: 'Label',
  icon: <Icon name="reader-outline"></Icon>,
};

export const LabelWithIconTitle = Template.bind({});

LabelWithIconTitle.args = {
  theme: 'special',
  label: 'Label',
  title: 'Title',
  icon: 'reader-outline',
};
