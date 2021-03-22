import T from 'prop-types';
import React from 'react';
import { screenSizes } from '../../Shared/NumlTypes';
import { IconSize } from './../Avatar/Avatar.type';
import { TThumbnailProps } from './Thumbnail.type';

function Thumbnail(allProps: TThumbnailProps) {
  let { size = screenSizes.MD, source, alt, fit, ...otherProps } = allProps;

  return (
    <nu-el
      display="flex"
      content="center"
      items="center"
      width={`${IconSize[size]}0px`}
      height={`${IconSize[size]}0px`}
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