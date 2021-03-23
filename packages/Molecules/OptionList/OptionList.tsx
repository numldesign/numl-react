import React, { useEffect, useRef } from 'react';
import Checkbox from '../../Atoms/Checkbox/Checkbox';
import { TOptionListProps } from './OptionList.type';

function OptionList(allProps: TOptionListProps) {
  const ref: any = useRef();
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
      ref.current.addEventListener('input', (evt: any) => onChange(evt.detail));
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
          ? options.map((item: any, index: any) => {
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
          ? sections.map((option: { renderHeader: any; options: string | any[]; }, sectionIndex: any) => {
            const sectionHeader = option.renderHeader
              ? option.renderHeader
              : null;
            const optionList: any =
              option.options && option.options.length ? option.options : [];
            return (
              <nu-block key={sectionIndex}>
                {sectionHeader}
                {optionList.map((item: { index: any; }) => {
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

export default OptionList