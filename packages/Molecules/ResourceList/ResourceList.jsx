import React, { useRef, useEffect } from 'react';

import Avatar from '../../Atoms/Avatar/Avatar';
import Checkbox from '../../Atoms/Checkbox/Checkbox';

export default function ResourceList(allProps) {
  const ref = useRef();
  const {
    selected,
    multiSelect,
    items,
    onChange,
    contentWrapperProps,
    itemWrapperProps,
    renderItem,
    ...otherProps
  } = allProps;

  useEffect(() => {
    if (ref && ref.current && onChange) {
      ref.current.addEventListener('input', (evt) => onChange(evt.detail));
    }
  }, []);

  return (
    <nu-block {...otherProps}>
      <nu-listbox
        ref={ref}
        border="n"
        padding="0"
        value={selected}
        multiple={multiSelect || undefined}
      >
        {items && items.length
          ? items.map((item, index) => {
              const value = item.id || index;
              const checked =
                multiSelect && selected && selected.includes(String(value));
              return (
                <nu-option
                  key={value}
                  value={value}
                  columns="auto 1fr"
                  gap="2x"
                  items="start stretch"
                  {...contentWrapperProps}
                >
                  <nu-pane gap="2x">
                    {multiSelect ? <Checkbox checked={checked} /> : null}
                    <Avatar size="md" username={item.avatar} />
                  </nu-pane>
                  <nu-block {...itemWrapperProps}>
                    {renderItem && renderItem({ item, value, index })}
                  </nu-block>
                </nu-option>
              );
            })
          : null}
      </nu-listbox>
    </nu-block>
  );
}
