import React from 'react';

const useToggle = (initialValue = false): [boolean, any] => {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
};

const useValue = (initialValue = ''): [string, any] => {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback((value) => {
    setValue(() => value);
  }, []);
  return [value, toggle];
};

export { useToggle, useValue };
