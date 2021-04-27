import React from 'react';

const Card = function (props: any) {
  const { children, ...otherProps } = props;

  return React.createElement('nu-card', otherProps, [children]);
};

export default Card;
