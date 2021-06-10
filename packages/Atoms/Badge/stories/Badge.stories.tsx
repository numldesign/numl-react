import React from 'react';
import Badge from '../src/Badge';

export default {
  title: 'Numl React/Atoms/Badge/Themes',
  component: Badge,
};

const DefaultTemplate = (props: any) => {
  const { ...otherProps } = props;
  return (
    <>
      <Badge {...otherProps} />
    </>
  );
};

export const Neutral = DefaultTemplate.bind({});
Neutral.args = {
  label: 'Neutral',
};

export const Informational = DefaultTemplate.bind({});
Informational.args = {
  label: 'Informational',
  theme: 'special',
};

export const Success = DefaultTemplate.bind({});
Success.args = {
  label: 'Success',
  theme: 'success',
};

export const Warning = DefaultTemplate.bind({});
Warning.args = {
  label: 'Warning',
  theme: 'warning',
};

export const Danger = DefaultTemplate.bind({});
Danger.args = {
  label: 'Danger',
  theme: 'danger',
};
