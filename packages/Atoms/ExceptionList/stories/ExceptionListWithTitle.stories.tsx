import React from 'react';
import ExceptionList from '../src/ExceptionList';

export default {
  title: 'Numl React/Atoms/ExceptionList/Title',
  component: ExceptionList,
};

const Template = ({ title, label, icon, ...args }) => {
  const items = [
    { title, label, icon },
    { title, label, icon },
    { title, label, icon },
  ];
  return (
    <>
      <ExceptionList items={items} {...args} />
    </>
  );
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Neutral',
  title: 'Title',
  icon: 'reader-outline',
};

export const Danger: any = Template.bind({});
Danger.args = {
  label: 'Neutral',
  theme: 'danger',
  title: 'Title',
  icon: 'reader-outline',
};

export const Warning: any = Template.bind({});
Warning.args = {
  label: 'Neutral',
  theme: 'warning',
  title: 'Title',
  icon: 'reader-outline',
};

export const Success: any = Template.bind({});
Success.args = {
  label: 'Neutral',
  theme: 'success',
  title: 'Title',
  icon: 'reader-outline',
};
