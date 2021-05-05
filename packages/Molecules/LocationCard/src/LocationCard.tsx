import T from 'prop-types';
import React from 'react';
import { Icon } from '../../../Atoms/Icon';
import { TLocationCardProps } from './LocationCard.type';

function LocationCard(allProps: TLocationCardProps): JSX.Element {
  const { name, radius = '1x', border = '1bw', fill = 'bg', address, ...otherProps } = allProps;

  return (
    <nu-flex radius={radius} border={border} fill={fill} {...otherProps}>
      <nu-flex padding="2x 0 2x 2x" items="center">
        <Icon name="pin" padding="1x" width="4x" height="4x" fill="special-mark" radius="1.2x" />
      </nu-flex>
      <El.Block width="100%">
        <nu-flex content="space-between" flow="row wrap">
          <El.Block text="sb" padding="2x 2x 0 2x">
            {name}
          </El.Block>
          <El.Block padding="2x 2x 0 2x">
            <nu-badge radius="2x">Default</nu-badge>
          </El.Block>
        </nu-flex>
        <El.Block padding="0 2x 2x 2x">{address}</El.Block>
      </El.Block>
    </nu-flex>
  );
}

LocationCard.propTypes = {
  name: T.string,
  address: T.string,
};

export default LocationCard;
