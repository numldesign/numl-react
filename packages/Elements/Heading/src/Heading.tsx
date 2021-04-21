import React from 'react';

export const Heading = (props: any) => {
  const { children, level = '1', ...otherProps } = props;
  return (
    <nu-heading level={level} {...otherProps}>
      {children}
    </nu-heading>
  );
};
Heading.One = (props: any) => {
  const { children, ...otherProps } = props;
  return <nu-h1 {...otherProps}> {children} </nu-h1>;
};
Heading.Two = (props: any) => {
  const { children, ...otherProps } = props;
  return <nu-h2 {...otherProps}> {children} </nu-h2>;
};
Heading.Three = (props: any) => {
  const { children, ...otherProps } = props;
  return <nu-h3 {...otherProps}> {children} </nu-h3>;
};
Heading.Four = (props: any) => {
  const { children, ...otherProps } = props;
  return <nu-h4 {...otherProps}> {children} </nu-h4>;
};
Heading.Five = (props: any) => {
  const { children, ...otherProps } = props;
  return <nu-h5 {...otherProps}> {children} </nu-h5>;
};
Heading.Six = (props: any) => {
  const { children, ...otherProps } = props;
  return <nu-h6 {...otherProps}> {children} </nu-h6>;
};
export default Heading;
