import React from 'react';

const FileInput = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-fileinput',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default FileInput;
