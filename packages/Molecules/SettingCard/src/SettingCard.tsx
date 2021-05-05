import React from 'react';
import { Icon } from '../../../Atoms/Icon';
import { TSettingCardProps } from './SettingCard.type';

function SettingCard(allProps: TSettingCardProps) {
  const {
    title,
    fill = 'bg',
    gap = '2x',
    padding = '2x',
    items = 'flex-start',
    subtitle,
    icon,
    ...otherProps
  } = allProps;

  return (
    <nu-pane fill={fill} gap={gap} padding={padding} items={items} {...otherProps}>
      {typeof icon === 'string' ? (
        <Icon name={icon} padding="1x" width="4x" height="4x" fill="special-mark" radius="1.2x" />
      ) : (
        icon
      )}
      <El.Block height="min 10x">
        <El.Block text="sb" color="#special">
          {title}
        </El.Block>
        <El.Block>{subtitle}</El.Block>
      </El.Block>
    </nu-pane>
  );
}

export default SettingCard;
