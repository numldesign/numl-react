import React from 'react';

/**
 * Default Numl Heading
 * @param props
 * @returns
 */
export const Heading = (props: any) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-heading',
    {
      ...otherProps,
    },
    [children]
  );
};

/**
 * Numl Heading level 1
 * @param props
 * @returns
 */
Heading.One = (props: any) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-h1',
    {
      ...otherProps,
    },
    [children]
  );
};

/**
 * Numl Heading level 2
 * @param props
 * @returns
 */
Heading.Two = (props: any) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-h2',
    {
      ...otherProps,
    },
    [children]
  );
};

/**
 * Numl Heading level 3
 * @param props
 * @returns
 */
Heading.Three = (props: any) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-h3',
    {
      ...otherProps,
    },
    [children]
  );
};

/**
 * Numl Heading level 4
 * @param props
 * @returns
 */
Heading.Four = (props: any) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-h4',
    {
      ...otherProps,
    },
    [children]
  );
};

/**
 * Numl Heading level 5
 * @param props
 * @returns
 */
Heading.Five = (props: any) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-h5',
    {
      ...otherProps,
    },
    [children]
  );
};

/**
 * Numl Heading level 6
 * @param props
 * @returns
 */
Heading.Six = (props: any) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-h6',
    {
      ...otherProps,
    },
    [children]
  );
};
export default Heading;
