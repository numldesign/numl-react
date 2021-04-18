import React from 'react';

export default function AttributeProvider(props: any) {
  const { ...otherProps } = props;
  return <nu-attrs {...otherProps}></nu-attrs>;
}
