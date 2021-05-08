import React from 'react';
import { El } from '@numl-react/core';

function Thumbnail(allProps: any) {
  let { source, alt, fit, ...otherProps } = allProps;

  return (
    <El.BaseElement display="flex" content="center" items="center" radius=".5r" overflow="no" {...otherProps}>
      <El.Image src={source} width="100%" label={alt} fit={fit} />
    </El.BaseElement>
  );
}

export default Thumbnail;
