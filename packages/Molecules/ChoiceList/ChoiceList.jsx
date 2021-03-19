import React, { useState, useCallback } from 'react';

import Radio from '../../Atoms/Radio/Radio';
import Checkbox from '../../Atoms/Checkbox/Checkbox';

export default function ChoiceList(allProps) {
  const {
    heading,
    choices,
    selected,
    onChange,
    multiSelect,
    ...otherProps
  } = allProps;

  const choiceList = choices && choices.length ? [...choices] : [];

  return (
    <nu-grid display="inline-grid" gap {...otherProps}>
      {heading ? <nu-block>{heading}</nu-block> : null}
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
    </nu-grid>
  );
}

ChoiceList.RadioList = function RadioChoiceList(allProps) {
  const { choiceList, selected, onChange } = allProps;

  if (choiceList.length) {
    return (
      <Radio.Group value={selected} onChange={onChange}>
        <nu-list type="none">
          {choiceList.map((choice) => {
            const { label, value, renderChildren } = choice;
            return (
              <nu-listitem key={value}>
                <Radio.Field value={value}>{label}</Radio.Field>
                {renderChildren && value === selected ? (
                  <nu-list type="none">{renderChildren}</nu-list>
                ) : null}
              </nu-listitem>
            );
          })}
        </nu-list>
      </Radio.Group>
    );
  } else {
    return null;
  }
};

ChoiceList.CheckList = function CheckChoiceList(allProps) {
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
      <nu-list type="none">
        {choiceList.map((choice) => {
          const { label, value, helpText } = choice;
          const isChecked = selectedValues.has(value) ? true : undefined;
          return (
            <nu-listitem key={value}>
              <Checkbox.Field
                checked={isChecked}
                value={value}
                items="start"
                onInput={handleChecklistChange}
              >
                <nu-block>{label}</nu-block>
                <nu-block color="#text-soft">{helpText}</nu-block>
              </Checkbox.Field>
            </nu-listitem>
          );
        })}
      </nu-list>
    );
  } else {
    return null;
  }
};

/**
 *
 * @param {*} value handle user input values and convert it into Set
 */
const getDefaultCheckValue = (value) => {
  if (typeof value === 'string') {
    return new Set([value]);
  } else if (Array.isArray(value)) {
    return new Set(value);
  } else {
    return new Set();
  }
};
