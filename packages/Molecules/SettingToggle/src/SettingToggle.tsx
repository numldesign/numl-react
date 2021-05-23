import React, { useCallback } from 'react';
import { El } from '@numl-react/core';

function SettingToggle(allProps: any): JSX.Element {
  const { text, activeText, inactiveText, isActive, onAction, ...otherProps } =
    allProps;

  const handleStatusChange = useCallback(() => {
    onAction({ status: !isActive });
  }, [isActive]);

  return (
    <El.Card>
      <El.Flex
        content="space-between"
        items="center"
        gap
        width="72.5"
        {...otherProps}
      >
        <El.Inline flex gap>
          <El.BaseElement>{text}</El.BaseElement>
          <El.BaseElement text="sb">
            {isActive ? activeText : inactiveText}
          </El.BaseElement>
        </El.Inline>
        <El.Button
          special={isActive ? true : undefined}
          onTap={handleStatusChange}
        >
          {isActive ? activeText : inactiveText}
        </El.Button>
      </El.Flex>
    </El.Card>
  );
}

export default SettingToggle;
