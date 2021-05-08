import React from 'react';

const Section = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-section',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Section;
