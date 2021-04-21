import React from 'react';
import { NumlProvider, ThemeProvider } from '../../../entry';
import Thumbnail from '../src/Thumbnail';

export default {
  title: 'Example/Atoms/Thumbnail',
  component: Thumbnail,
  argTypes: {
    fit: {
      defaultValue: 'fill',
      control: {
        type: 'inline-radio',
        options: ['fill', 'none'],
      },
    },
    source: {
      control: {
        type: 'text',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    {<Thumbnail {...args} />}
  </NumlProvider>
);

export const Default = Template.bind({});
