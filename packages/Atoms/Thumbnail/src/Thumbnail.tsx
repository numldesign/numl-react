import T from 'prop-types';
import React from 'react';
import { TThumbnailProps } from './Thumbnail.type';

function Thumbnail(allProps: TThumbnailProps) {
  let { source, alt, fit, ...otherProps } = allProps;

  return (
    <El.BaseElement display="flex" content="center" items="center" radius=".5r" overflow="no" {...otherProps}>
      <nu-img src={source} width="100%" label={alt} fit={fit} />
    </El.BaseElement>
  );
}

Thumbnail.propTypes = {
  size: T.string,
  fit: T.string,
  source: T.string,
  alt: T.string,
};

export default Thumbnail;
