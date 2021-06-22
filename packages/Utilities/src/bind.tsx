/* eslint-disable no-param-reassign */
import { useCallback, useEffect, useState } from 'react';

const useBinding = (initialValue: any): [any, any] => {
  // eslint-disable-next-line prefer-const
  let [value, setValue] = useState(initialValue);

  const updateDate = useCallback(() => {
    setValue(value);
  }, [value]);

  useEffect(() => updateDate(), [value]);

  return [value, setValue];
};

export { useBinding };
