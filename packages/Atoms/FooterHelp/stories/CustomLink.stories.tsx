import React from 'react';
import Link from '../../Link/src/Link';
import FooterHelp from '../src/FooterHelp';

export default {
  title: 'Numl React/Atoms/FooterHelp/Custom Link',
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
  link: (
    <Link to="https://www.google.com/" label="product" icon="log-out-outline" />
  ),
  linkLabel: 'product.',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Learn more about',
  icon: 'help-circle-outline',
  link: (
    <Link to="https://www.google.com/" label="product" icon="log-out-outline" />
  ),
  linkLabel: 'product.',
};
