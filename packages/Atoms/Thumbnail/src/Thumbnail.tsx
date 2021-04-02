import T from 'prop-types';
import React from 'react';
import { TThumbnailProps } from './Thumbnail.type';

function Thumbnail(allProps: TThumbnailProps) {
  let { size, source, alt, fit, ...otherProps } = allProps;

  return (
    <nu-el
      display="flex"
      content="center"
      items="center"
      radius=".5r"
      overflow="no"
      {...otherProps}
    >
      <nu-img src={source} width="100%" label={alt} fit={fit} />
    </nu-el>
  );
}

Thumbnail.propTypes = {
  size: T.string,
  fit: T.string,
  source: T.string,
  alt: T.string,
};

export default Thumbnail;
