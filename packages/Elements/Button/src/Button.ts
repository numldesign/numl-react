import React from 'react';

const Button = function (props: any) {
  const { children, ...otherProps } = props;

  return React.createElement('nu-btn', otherProps, [children]);
};

export default Button;
