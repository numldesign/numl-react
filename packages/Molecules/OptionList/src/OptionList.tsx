import React, { useEffect, useRef } from 'react';
import { El } from '../../../Core';
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
    <El.Block {...otherProps}>
      {renderHeader}
      <El.Listbox ref={ref} border="n" padding="0" value={selected} multiple={multiSelect || undefined}>
        {options && options.length
          ? options.map((item: any, index: any) => {
              const checked = multiSelect && selected && selected.includes(String(index));
              return (
                <El.Option key={index} value={index} {...contentWrapperProps}>
                  {multiSelect ? (
                    <El.Block {...checkboxWrapperProps}>
                      <El.Checkbox checked={checked} />
                    </El.Block>
                  ) : null}
                  {renderContent && renderContent({ item, index })}
                </El.Option>
              );
            })
          : null}

        {sections && sections.length
          ? sections.map((option: { renderHeader: any; options: string | any[] }, sectionIndex: any) => {
              const sectionHeader = option.renderHeader ? option.renderHeader : null;
              const optionList: any = option.options && option.options.length ? option.options : [];
              return (
                <El.Block key={sectionIndex}>
                  {sectionHeader}
                  {optionList.map((item: { index: any }) => {
                    const index = item.index;
                    const checked = multiSelect && selected && selected.includes(String(index));
                    return (
                      <El.Option key={index} value={index} {...contentWrapperProps}>
                        {multiSelect ? (
                          <El.Block {...checkboxWrapperProps}>
                            <El.Checkbox checked={checked} />
                          </El.Block>
                        ) : null}
                        {renderContent && renderContent({ item, index, sectionIndex })}
                      </El.Option>
                    );
                  })}
                </El.Block>
              );
            })
          : null}
      </El.Listbox>
    </El.Block>
  );
}

export default OptionList;
