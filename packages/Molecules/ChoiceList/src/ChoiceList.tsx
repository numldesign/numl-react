import { Checkbox, El, Radio } from '@numl-react/core';
import React, { useCallback, useState } from 'react';

/**
 *
 * @param {*} value handle user input values and convert it into Set
 */

const getDefaultCheckValue = (value: any): any => {
  if (typeof value === 'string') {
    return new Set([value]);
  }
  if (Array.isArray(value)) {
    return new Set(value);
  }
  return new Set();
};

function ChoiceList(allProps: any): JSX.Element {
  const { heading, choices, selected, onChange, multiSelect, ...otherProps } =
    allProps;

  const choiceList = choices && choices.length ? [...choices] : [];

  return (
    <El.Grid display="inline-grid" gap {...otherProps}>
      {heading ? <El.Block>{heading}</El.Block> : null}
      {multiSelect ? (
        <ChoiceList.CheckList
          choiceList={choiceList}
          selected={selected}
          onChange={onChange}
        />
      ) : (
        <ChoiceList.RadioList
          choiceList={choiceList}
          selected={selected}
          onChange={onChange}
        />
      )}
    </El.Grid>
  );
}

ChoiceList.RadioList = function RadioChoiceList(allProps: any) {
  const { choiceList, selected, onChange } = allProps;

  if (choiceList.length) {
    return (
      <Radio.Group value={selected} onChange={onChange}>
        <Radio.List list={choiceList} />
      </Radio.Group>
    );
  }
  return null;
};

ChoiceList.CheckList = function CheckChoiceList(allProps: any) {
  const { choiceList, selected, onChange } = allProps;

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
      onChange([...selectedValues]);
    },
    [selectedValues]
  );

  if (choiceList.length) {
    return (
      <El.List type="none">
        {React.Children.toArray(
          choiceList.map(
            (choice: { label: any; value: any; helpText: any }) => {
              const { label, value, helpText } = choice;
              const isChecked = selectedValues.has(value) ? true : undefined;
              return (
                <El.Listitem>
                  <Checkbox
                    checked={isChecked}
                    value={value}
                    label={
                      <>
                        <El.Block>{label}</El.Block>
                        <El.Block color="#text-soft">{helpText}</El.Block>
                      </>
                    }
                    items="start"
                    onInput={handleChecklistChange}
                  />
                </El.Listitem>
              );
            }
          )
        )}
      </El.List>
    );
  }
  return null;
};

export default ChoiceList;
