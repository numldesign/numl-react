import React, { useEffect, useRef } from 'react';
import { Icon } from '../../../Atoms/Icon';
import { El } from '@numl-react/core';
import { TSearchProps } from './Search.type';

function Search(allProps: TSearchProps): JSX.Element {
  const ref: any = useRef();
  const listBoxRef: any = useRef();

  const {
    value,
    onSearchInput,
    onResultItemInput,
    inputProps,
    inputGroupProps,
    resultContainerProps,
    extraActions,
    border = '0',
    resultList,
    renderResultItem,
    ...otherProps
  } = allProps;

  useEffect(() => {
    if (ref && ref.current && onSearchInput) {
      ref.current.addEventListener('input', (evt: any) => onSearchInput(evt.detail));
    }
    if (listBoxRef && listBoxRef.current && onResultItemInput) {
      listBoxRef.current.addEventListener('input', (evt: any) => onResultItemInput(evt.detail));
    }
  }, []);

  const renderList = resultList && Array.isArray(resultList) ? resultList : [];

  return (
    <El.Grid gap="1x" {...otherProps}>
      <El.InputGroup {...inputGroupProps}>
        <Icon name="search-outline" width="5x" />
        <El.Input ref={ref} value={value} {...inputProps} />
        {extraActions}
      </El.InputGroup>

      <El.Listbox ref={listBoxRef} border="0" padding="0" gap {...resultContainerProps}>
        {renderList.length
          ? renderList.map((item) => {
              if (renderResultItem) {
                return (
                  <El.Option key={item.value} value={item.value} columns="1fr">
                    {renderResultItem(item)}
                  </El.Option>
                );
              }
              return;
            })
          : null}
      </El.Listbox>
    </El.Grid>
  );
}

export default Search;
