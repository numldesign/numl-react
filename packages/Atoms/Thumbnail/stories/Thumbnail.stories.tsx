import React from 'react';
import Root from '../../../Elements/Root';
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
  <Root>
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
    {<Thumbnail {...args} />}
  </Root>
);

export const Default = Template.bind({});
