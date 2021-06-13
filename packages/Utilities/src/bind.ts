/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';

const useBinding = (
  name: string,
  form: { [x: string]: any },
  initialValue: any
): [any, any] => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    form[name] = value;
    setValue(value);
    console.log(value);
  }, []);

  return [value, setValue];
};

export { useBinding };
