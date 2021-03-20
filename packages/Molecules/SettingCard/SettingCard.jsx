import T from 'prop-types';
import React from 'react';
import Icon from '../../Atoms/Icon/Icon';

export default function SettingCard(allProps) {
  const { title, subtitle, icon, ...otherProps } = allProps;

  return (
    <nu-pane fill="bg" gap="2x" padding="2x" items="flex-start" {...otherProps}>
      {typeof icon === 'string' ? (
        <Icon
          name={icon}
          padding="1x"
          width="4x"
          height="4x"
          fill="special-mark"
          radius="1.2x"
        />
      ) : (
        icon
      )}
      <nu-block height="min 10x">
        <nu-block text="sb" color="#special">
          {title}
        </nu-block>
        <nu-block>{subtitle}</nu-block>
      </nu-block>
    </nu-pane>
  );
}

SettingCard.propTypes = {
  title: T.string,
  subtitle: T.string,
  icon: T.oneOfType([T.string, T.element]),
};
