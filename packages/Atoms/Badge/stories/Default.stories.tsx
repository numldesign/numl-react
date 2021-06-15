import React from 'react';
import Badge from '../src/Badge';

export default {
  title: 'Numl React/Atoms/Badge',
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

export const Basic = DefaultTemplate.bind({});
Basic.args = {
  label: 'default',
};
