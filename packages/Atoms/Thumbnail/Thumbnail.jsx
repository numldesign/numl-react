import T from 'prop-types';
import React from 'react';

const iconSize = {
  xs: '2',
  sm: '4',
  md: '6',
  lg: '8',
  xl: '10',
};

export default function Thumbnail(allProps) {
  let { size = 'md', source, alt, fit, ...otherProps } = allProps;

  return (
    <nu-el
      display="flex"
      content="center"
      items="center"
      width={`${iconSize[size]}0px`}
      height={`${iconSize[size]}0px`}
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
