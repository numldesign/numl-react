import React from 'react';
import * as El from '@numl-react/elements';
import Badge from '../src/Badge';

export default {
  title: 'Example/Atoms/Badge/Icons',
  component: Badge,
};

const Template = (props: any) => {
  const { label, icon, ...otherProps } = props;
  return (
    <>
      <Badge {...otherProps} icon={icon}>
        <Badge.Label>{label}</Badge.Label>
      </Badge>
    </>
  );
};

export const Informational = Template.bind({});

Informational.args = {
  label: 'Informational',
  icon: <Badge.Icon name="alert-circle-outline" />,
};

export const Danger = Template.bind({});

Danger.args = {
  label: 'Danger',
  theme: 'danger',
  icon: <Badge.Icon name="alert-circle-outline" />,
};

export const Special = Template.bind({});

Special.args = {
  label: 'Special',
  theme: 'special',
  icon: <Badge.Icon name="alert-circle-outline" />,
};

export const Warning = Template.bind({});

Warning.args = {
  label: 'Warning',
  theme: 'warning',
  icon: <Badge.Icon name="alert-circle-outline" />,
};

export const Success = Template.bind({});

Success.args = {
  label: 'Success',
  theme: 'success',
  icon: <Badge.Icon name="alert-circle-outline" />,
};
