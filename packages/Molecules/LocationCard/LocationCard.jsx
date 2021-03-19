import React from 'react';
import T from 'prop-types';

import Icon from '../../Atoms/Icon/Icon';

export default function LocationCard(allProps) {
  const { name, address, ...otherProps } = allProps;

  return (
    <nu-flex radius="1x" border="1bw" fill="bg" {...otherProps}>
      <nu-flex padding="2x 0 2x 2x" items="center">
        <Icon
          name="pin"
          padding="1x"
          width="4x"
          height="4x"
          fill="special-mark"
          radius="1.2x"
        />
      </nu-flex>
      <nu-block width="100%">
        <nu-flex content="space-between" flow="row wrap">
          <nu-block text="sb" padding="2x 2x 0 2x">
            {name}
          </nu-block>
          <nu-block padding="2x 2x 0 2x">
            <nu-badge radius="2x">Default</nu-badge>
          </nu-block>
        </nu-flex>
        <nu-block padding="0 2x 2x 2x">{address}</nu-block>
      </nu-block>
    </nu-flex>
  );
}

LocationCard.propTypes = {
  name: T.string,
  address: T.string,
};
