import * as El from '@numl-react/elements';
import React from 'react';
import Link from '../src/Link';

export default {
  title: 'Numl React/Atoms/Link',
  component: Link,
};

const Template = ({ ...args }) => (
  <>
    <Link {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  icon: <El.Icon name="exit-outline" theme="warning" text="top" />,
};

export const WithIconText = Template.bind({});
WithIconText.args = {
  label: 'Learn more about',
  to: 'https://numl.design',
  icon: 'exit-outline',
};
