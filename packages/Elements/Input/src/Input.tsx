import React from 'react';

function Input(props: any) {
  const { children, ...otherProps } = props;
  return <nu-input {...otherProps}>{children}</nu-input>;
}

Input.Number = function (props: any) {
  return <nu-numinput {...props}></nu-numinput>;
};
Input.Value = function (props: any) {
  return <nu-value {...props}></nu-value>;
};

export default Input;
