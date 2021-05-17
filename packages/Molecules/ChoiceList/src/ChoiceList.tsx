import { Checkbox, Radio } from '@numl-react/atoms';
import { El } from '@numl-react/core';
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

function ChoiceList(allProps: any) {
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
        <El.List type="none">
          {choiceList.map(
            (choice: { label: any; value: any; renderChildren: any }) => {
              const { label, value, renderChildren } = choice;
              return (
                <El.Listitem key={value}>
                  <Radio.Field value={value}>{label}</Radio.Field>
                  {renderChildren && value === selected ? (
                    <El.List type="none">{renderChildren}</El.List>
                  ) : null}
                </El.Listitem>
              );
            }
          )}
        </El.List>
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
        {choiceList.map((choice: { label: any; value: any; helpText: any }) => {
          const { label, value, helpText } = choice;
          const isChecked = selectedValues.has(value) ? true : undefined;
          return (
            <El.Listitem key={value}>
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
        })}
      </El.List>
    );
  }
  return null;
};

export default ChoiceList;
