import React, { useEffect, useState } from 'react';
import { LoadNuml } from '../../helpers';
import Root from './../Root';

export const NumlProvider = (props: any) => {
  const { children, ...otherProps } = props;
  const [status, setStatus] = useState(false);
  useEffect(() => {
    LoadNuml().then((data) => setStatus(true));
  }, []);

  return status && <Root {...otherProps}>{children}</Root>;
};
