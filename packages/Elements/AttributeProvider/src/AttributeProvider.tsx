import React from 'react';

const AttributeProvider = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement('nu-attrs', {
    ...otherProps,
    ref,
  });
});

export default AttributeProvider;
