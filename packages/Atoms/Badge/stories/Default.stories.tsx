import React from 'react';
import * as El from '@numl-react/elements';
import Badge from '../src/Badge';

export default {
  title: 'Example/Atoms/Badge',
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
