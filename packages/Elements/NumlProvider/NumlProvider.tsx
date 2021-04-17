import React, { useEffect, useState } from 'react';
import Root from './../Root';
import Nude from 'numl';

export const NumlProvider = (props: any) => {
  const { children, ...otherProps } = props;
  Nude.init();
  return <Root {...otherProps}>{children}</Root>;
};
