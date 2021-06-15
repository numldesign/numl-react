import React from 'react';

const useToggle = (initialValue = false): [boolean, any] => {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, [value]);
  return [value, toggle];
};

export { useToggle };
