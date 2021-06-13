import { Checkbox, El } from '@numl-react/core';
import React, { useEffect, useRef } from 'react';
import Avatar from '../../../Atoms/Avatar/src/Avatar';

function ResourceList(allProps: any): JSX.Element {
  const ref: any = useRef();
  const {
    selected,
    multiSelect = undefined,
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
      <El.Listbox
        ref={ref}
        flex
        gap="2x"
        border={border}
        padding={padding}
        value={selected}
        multiple={multiSelect}
      >
        {items && items.length
          ? React.Children.toArray(
              items.map(
                (item: { id: any; avatar: string | undefined }, index: any) => {
                  const value = item.id || index;
                  const checked =
                    multiSelect && selected && selected.includes(String(value));
                  return (
                    <El.Option
                      value={value}
                      columns="auto 1fr"
                      flex
                      gap="2x"
                      items="start stretch"
                      {...contentWrapperProps}
                    >
                      <El.Flex flex gap="2x">
                        {multiSelect ? <Checkbox checked={checked} /> : null}
                        <Avatar.Icon theme="danger" clear mark="n" />
                      </El.Flex>
                      <El.Flex flex gap="2x" {...itemWrapperProps}>
                        {renderItem && renderItem({ item, value, index })}
                      </El.Flex>
                    </El.Option>
                  );
                }
              )
            )
          : null}
      </El.Listbox>
    </El.Block>
  );
}

export default ResourceList;
