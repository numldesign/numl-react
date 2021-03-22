import T from 'prop-types';
import React from 'react';
import { themeAttr } from '../../helpers';
import { screenSizes } from '../../Shared/NumlTypes';
import { IconSize } from './../Avatar/Avatar.type';
import { TChipProps } from './Chip.type';


function Chip(allProps: TChipProps): JSX.Element {
  const { size = screenSizes.MD, label, icon, theme } = allProps;

  return (
    <nu-badge
      size={size}
      theme={theme || themeAttr(allProps, true)}
      radius="4x"
      padding="0.5x 1x 0.5x 1x"
    >
      {typeof icon === 'string' ? <nu-icon name={icon} /> : icon}
      {label}
      <nu-icon
        size={`${IconSize[size]}x`}
        name="close-outline"
        rotate="270deg"
      />
    </nu-badge>
  );
}

Chip.propTypes = {
  size: T.string,
  label: T.string,
  icon: T.oneOfType([T.string, T.element]),
};


export default Chip;