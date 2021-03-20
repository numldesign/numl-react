import T from 'prop-types';
import React, { useEffect, useRef } from 'react';
import Icon from '../../Atoms/Icon/Icon';

export default function Search(allProps) {
  const ref = useRef();
  const listBoxRef = useRef();

  const {
    value,
    onSearchInput,
    onResultItemInput,
    inputProps,
    inputGroupProps,
    resultContainerProps,
    extraActions,
    resultList,
    renderResultItem,
    ...otherProps
  } = allProps;

  useEffect(() => {
    if (ref && ref.current && onSearchInput) {
      ref.current.addEventListener('input', (evt) => onSearchInput(evt.detail));
    }
    if (listBoxRef && listBoxRef.current && onResultItemInput) {
      listBoxRef.current.addEventListener('input', (evt) =>
        onResultItemInput(evt.detail)
      );
    }
  }, []);

  const renderList = resultList && Array.isArray(resultList) ? resultList : [];

  return (
    <nu-grid gap="1x" {...otherProps}>
      <nu-inputgroup {...inputGroupProps}>
        <Icon name="search-outline" width="5x" />
        <nu-input ref={ref} value={value} {...inputProps} />
        {extraActions}
      </nu-inputgroup>

      <nu-listbox
        ref={listBoxRef}
        border="n"
        padding="0"
        gap
        {...resultContainerProps}
      >
        {renderList.length
          ? renderList.map((item) => {
              if (renderResultItem) {
                return (
                  <nu-option key={item.value} value={item.value} columns="1fr">
                    {renderResultItem(item)}
                  </nu-option>
                );
              }
            })
          : null}
      </nu-listbox>
    </nu-grid>
  );
}

Search.propTypes = {
  value: T.string,
  onSearchInput: T.func,
  onResultItemInput: T.func,
  inputProps: T.object,
  inputGroupProps: T.object,
  resultContainerProps: T.object,
  extraActions: T.any,
  resultList: T.array,
  renderResultItem: T.func,
};
