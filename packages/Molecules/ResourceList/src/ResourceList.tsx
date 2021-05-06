import React, { useEffect, useRef } from 'react';
import { Avatar } from '../../../Atoms/Avatar';
import { Checkbox } from '../../../Atoms/Checkbox';
import { El } from '../../../Core';
import { TResourceListProps } from './ResourceList.type';

function ResourceList(allProps: TResourceListProps) {
  const ref: any = useRef();
  const {
    selected,
    multiSelect,
    items,
    onChange,
    padding = '0',
    border = '0',
    contentWrapperProps,
    itemWrapperProps,
    renderItem,
    ...otherProps
  } = allProps;

  useEffect(() => {
    if (ref && ref.current && onChange) {
      ref.current.addEventListener('input', (evt: any) => onChange(evt.detail));
    }
  }, []);

  return (
    <El.Block {...otherProps}>
      <El.Listbox ref={ref} border={border} padding={padding} value={selected} multiple={multiSelect || undefined}>
        {items && items.length
          ? items.map((item: { id: any; avatar: string | undefined }, index: any) => {
              const value = item.id || index;
              const checked = multiSelect && selected && selected.includes(String(value));
              return (
                <El.Option
                  key={value}
                  value={value}
                  columns="auto 1fr"
                  gap="2x"
                  items="start stretch"
                  {...contentWrapperProps}
                >
                  <El.Pane gap="2x">
                    {multiSelect ? <Checkbox checked={checked} /> : null}
                    <Avatar.Icon fill="danger" special border="0" />
                  </El.Pane>
                  <El.Block {...itemWrapperProps}>{renderItem && renderItem({ item, value, index })}</El.Block>
                </El.Option>
              );
            })
          : null}
      </El.Listbox>
    </El.Block>
  );
}

export default ResourceList;
