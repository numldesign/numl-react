import React from 'react';
import * as El from '@numl-react/elements';
import FooterHelp from '../src/FooterHelp';

export default {
  title: 'Example/Atoms/FooterHelp/Basic',
  component: FooterHelp,
};

const Template = ({ ...args }) => (
  <>
    <FooterHelp {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Learn more about',
  link: 'https://www.google.com/',
  linkLabel: 'product.',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: 'https://www.google.com/',
  linkLabel: 'product.',
};
