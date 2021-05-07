import React, { useCallback } from 'react';
import { El } from '@numl-react/core';
import { TSettingToggleProps } from './SettingToggle.type';

function SettingToggle(allProps: TSettingToggleProps) {
  const { text, activeText, inactiveText, isActive, onAction, ...otherProps } = allProps;

  const handleStatusChange = useCallback(() => {
    onAction({ status: !isActive });
  }, [isActive]);

  return (
    <El.Pane {...otherProps}>
      <El.Block>
        <El.BaseElement>{text}</El.BaseElement>{' '}
        <El.BaseElement text="sb">{isActive ? activeText : inactiveText}</El.BaseElement>
      </El.Block>
      <El.Button special={isActive ? true : undefined} onTap={handleStatusChange}>
        {isActive ? activeText : inactiveText}
      </El.Button>
    </El.Pane>
  );
}

export default SettingToggle;
