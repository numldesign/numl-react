import T from 'prop-types';
import React, { useCallback } from 'react';
import { Button } from '../../../Atoms/Button';
import { TSettingToggleProps } from './SettingToggle.type';

function SettingToggle(allProps: TSettingToggleProps) {
  const { text, activeText, inactiveText, isActive, onAction, ...otherProps } = allProps;

  const handleStatusChange = useCallback(() => {
    onAction({ status: !isActive });
  }, [isActive]);

  return (
    <nu-pane {...otherProps}>
      <El.Block>
        <El.BaseElement>{text}</El.BaseElement>{' '}
        <El.BaseElement text="sb">{isActive ? activeText : inactiveText}</El.BaseElement>
      </El.Block>
      <Button special={isActive ? true : undefined} onTap={handleStatusChange}>
        {isActive ? activeText : inactiveText}
      </Button>
    </nu-pane>
  );
}

SettingToggle.propTypes = {
  text: T.string,
  activeText: T.string,
  inactiveText: T.string,
  isActive: T.bool,
  onAction: T.func,
};

export default SettingToggle;
