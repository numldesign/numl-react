import React from 'react';

const useLogger = (value: any) => {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(value);
  }, [value]);
};

export { useLogger };
