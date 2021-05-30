import React from 'react';
import * as El from '@numl-react/elements';

function Thumbnail(allProps: any) {
  const { source, alt, fit, ...otherProps } = allProps;

  return (
    <El.BaseElement
      display="flex"
      content="center"
      items="center"
      radius=".5r"
      overflow="no"
      {...otherProps}
    >
      <El.Image src={source} width="100%" label={alt} fit={fit} />
    </El.BaseElement>
  );
}

export default Thumbnail;
