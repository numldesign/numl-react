import React from 'react';
import { El } from '@numl-react/core';

function LocationCard(allProps: any): JSX.Element {
  const { name, radius = '1x', border = '1bw', fill = 'bg', address, ...otherProps } = allProps;

  return (
    <El.Flex radius={radius} border={border} fill={fill} {...otherProps}>
      <El.Flex padding="2x 0 2x 2x" items="center">
        <El.Icon name="pin" padding="1x" width="4x" height="4x" fill="special-mark" radius="1.2x" />
      </El.Flex>
      <El.Block width="100%">
        <El.Flex content="space-between" flow="row wrap">
          <El.Block text="sb" padding="2x 2x 0 2x">
            {name}
          </El.Block>
          <El.Block padding="2x 2x 0 2x">
            <El.Badge radius="2x">Default</El.Badge>
          </El.Block>
        </El.Flex>
        <El.Block padding="0 2x 2x 2x">{address}</El.Block>
      </El.Block>
    </El.Flex>
  );
}

export default LocationCard;
