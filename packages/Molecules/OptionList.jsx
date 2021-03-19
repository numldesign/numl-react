import React, { useRef, useEffect } from 'react';

import Checkbox from '../Atoms/Checkbox/Checkbox';

export default function OptionList(allProps) {
  const ref = useRef();
  const {
    selected,
    options,
    sections,
    onChange,
    multiSelect,
    contentWrapperProps,
    checkboxWrapperProps,
    renderHeader,
    renderContent,
    ...otherProps
  } = allProps;

  useEffect(() => {
    if (ref && ref.current && onChange) {
      ref.current.addEventListener('input', (evt) => onChange(evt.detail));
    }
  }, []);

  return (
    <nu-block {...otherProps}>
      {renderHeader}
      <nu-listbox
        ref={ref}
        border="n"
        padding="0"
        value={selected}
        multiple={multiSelect || undefined}
      >
        {options && options.length
          ? options.map((item, index) => {
              const checked =
                multiSelect && selected && selected.includes(String(index));
              return (
                <nu-option key={index} value={index} {...contentWrapperProps}>
                  {multiSelect ? (
                    <nu-block {...checkboxWrapperProps}>
                      <Checkbox checked={checked} />
                    </nu-block>
                  ) : null}
                  {renderContent && renderContent({ item, index })}
                </nu-option>
              );
            })
          : null}

        {sections && sections.length
          ? sections.map((option, sectionIndex) => {
              const sectionHeader = option.renderHeader
                ? option.renderHeader
                : null;
              const optionList =
                option.options && option.options.length ? option.options : [];
              return (
                <nu-block key={sectionIndex}>
                  {sectionHeader}
                  {optionList.map((item) => {
                    const index = item.index;
                    const checked =
                      multiSelect &&
                      selected &&
                      selected.includes(String(index));
                    return (
                      <nu-option
                        key={index}
                        value={index}
                        {...contentWrapperProps}
                      >
                        {multiSelect ? (
                          <nu-block {...checkboxWrapperProps}>
                            <Checkbox checked={checked} />
                          </nu-block>
                        ) : null}
                        {renderContent &&
                          renderContent({ item, index, sectionIndex })}
                      </nu-option>
                    );
                  })}
                </nu-block>
              );
            })
          : null}
      </nu-listbox>
    </nu-block>
  );
}
