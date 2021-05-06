import React, { useCallback, useState } from 'react';
import { Checkbox, El } from '../../../Core';
import { TSheetProps } from './Sheet.type';

function Sheet(allProps: TSheetProps): JSX.Element {
  const { heading, footerActions, closeAction, choices, selected, onChange, contentHeight, ...otherProps } = allProps;

  const choiceList = choices && choices.length ? [...choices] : [];

  const [selectedValues, setSelectedValues] = useState(getDefaultCheckValue(selected));

  const handleChecklistChange = useCallback(
    (checkboxName) => {
      if (selectedValues.has(checkboxName)) {
        selectedValues.delete(checkboxName);
      } else {
        selectedValues.add(checkboxName);
      }
      setSelectedValues(selectedValues);
      onChange([...Array.from(selectedValues)]);
    },
    [selectedValues]
  );

  return (
    <El.Block nu-overlay place="inside" fill="#dark.50" box="y" radius="1x" {...otherProps}>
      {heading ? (
        <El.Pane padding="2x" border="bottom" items="start" content="space-between">
          {heading}
          {closeAction}
        </El.Pane>
      ) : null}
      <El.Flex flow="column" padding="2x" gap="2x" height={contentHeight}>
        {choiceList.length
          ? choiceList.map((choice) => {
              const { label, value } = choice;
              const isChecked = selectedValues.has(value) ? true : undefined;
              return (
                <Checkbox.Field key={value} checked={isChecked} value={value} onInput={handleChecklistChange}>
                  {label}
                </Checkbox.Field>
              );
            })
          : null}
      </El.Flex>
      {footerActions ? (
        <El.Pane content="space-between" gap="1x" padding="2x">
          {footerActions}
        </El.Pane>
      ) : null}
    </El.Block>
  );
}

/**
 *
 * @param {*} value handle user input values and convert it into Set
 */
const getDefaultCheckValue = (value: any): Set<any> => {
  if (typeof value === 'string') {
    return new Set([value]);
  } else if (Array.isArray(value)) {
    return new Set(value);
  } else {
    return new Set();
  }
};

export default Sheet;
