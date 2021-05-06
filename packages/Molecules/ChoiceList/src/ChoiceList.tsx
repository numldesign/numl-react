import React, { useCallback, useState } from 'react';
import { Checkbox, El, Radio } from '../../../Core';
import { TCheckChoiceListProps, TChoiceListProps, TRadioChoiceListProps } from './ChoiceList.type';

function ChoiceList(allProps: TChoiceListProps) {
  const { heading, choices, selected, onChange, multiSelect, ...otherProps } = allProps;

  const choiceList = choices && choices.length ? [...choices] : [];

  return (
    <El.Grid display="inline-grid" gap {...otherProps}>
      {heading ? <El.Block>{heading}</El.Block> : null}
      {multiSelect ? (
        <ChoiceList.CheckList choiceList={choiceList} selected={selected} onChange={onChange} />
      ) : (
        <ChoiceList.RadioList choiceList={choiceList} selected={selected} onChange={onChange} />
      )}
    </El.Grid>
  );
}

ChoiceList.RadioList = function RadioChoiceList(allProps: TRadioChoiceListProps) {
  const { choiceList, selected, onChange } = allProps;

  if (choiceList.length) {
    return (
      <Radio.Group value={selected} onChange={onChange}>
        <El.List type="none">
          {choiceList.map((choice: { label: any; value: any; renderChildren: any }) => {
            const { label, value, renderChildren } = choice;
            return (
              <El.Listitem key={value}>
                <Radio.Field value={value}>{label}</Radio.Field>
                {renderChildren && value === selected ? <El.List type="none">{renderChildren}</El.List> : null}
              </El.Listitem>
            );
          })}
        </El.List>
      </Radio.Group>
    );
  } else {
    return null;
  }
};

ChoiceList.CheckList = function CheckChoiceList(allProps: TCheckChoiceListProps) {
  const { choiceList, selected, onChange } = allProps;

  const [selectedValues, setSelectedValues] = useState(getDefaultCheckValue(selected));

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
              <Checkbox.Field checked={isChecked} value={value} items="start" onInput={handleChecklistChange}>
                <El.Block>{label}</El.Block>
                <El.Block color="#text-soft">{helpText}</El.Block>
              </Checkbox.Field>
            </El.Listitem>
          );
        })}
      </El.List>
    );
  } else {
    return null;
  }
};

/**
 *
 * @param {*} value handle user input values and convert it into Set
 */
const getDefaultCheckValue = (value: any): any => {
  if (typeof value === 'string') {
    return new Set([value]);
  } else if (Array.isArray(value)) {
    return new Set(value);
  } else {
    return new Set();
  }
};

export default ChoiceList;
