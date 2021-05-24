import React, { useCallback, useState } from 'react';
import { El, Checkbox } from '@numl-react/core';

function Sheet(allProps: any): JSX.Element {
  const {
    heading,
    footerActions,
    closeAction,
    choices,
    selected,
    onChange,
    contentHeight,
    ...otherProps
  } = allProps;

  const choiceList = choices && choices.length ? [...choices] : [];

  const [selectedValues, setSelectedValues] = useState(
    getDefaultCheckValue(selected)
  );

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
    <El.Card padding="0" nu-overlay {...otherProps}>
      {heading ? (
        <El.Flex
          padding="2x"
          gap
          border="bottom"
          items="center"
          content="space-between"
        >
          {heading}
          <El.Button icon="close" onTap={closeAction} />
        </El.Flex>
      ) : null}
      <El.Flex flow="column" padding="2x" gap="2x" height={contentHeight}>
        {choiceList.length
          ? choiceList.map((choice) => {
              const { label, value } = choice;
              const isChecked = selectedValues.has(value) ? true : undefined;
              return (
                <Checkbox
                  key={value}
                  label={label}
                  checked={isChecked}
                  value={value}
                  onInput={handleChecklistChange}
                />
              );
            })
          : null}
      </El.Flex>
      {footerActions ? (
        <El.Pane content="space-between" gap="1x" padding="2x">
          {footerActions}
        </El.Pane>
      ) : null}
    </El.Card>
  );
}

/**
 *
 * @param {*} value handle user input values and convert it into Set
 */

const getDefaultCheckValue = (value: any): Set<any> => {
  if (typeof value === 'string') {
    return new Set([value]);
  }
  if (Array.isArray(value)) {
    return new Set(value);
  }
  return new Set();
};

export default Sheet;
