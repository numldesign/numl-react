import React, { Suspense, useEffect, useState } from 'react';
import { LoadNuml } from '../../../helpers';
import Root from '../../Root';

export const NumlProvider = (props: any) => {
  const { icons = 'ion', theme = 'dark', children, onInit, height = '100%', fill, ...otherProps } = props;
  const [state, setState] = useState(false);
  useEffect(() => {
    LoadNuml()
      .then((Nude: any) => {
        Nude.scheme(theme);
        Nude.init();
        document.documentElement.dataset['nuIcons'] = icons;
        document.documentElement.dataset['scheme'] = theme;
        onInit && onInit(Nude);
      })
      .then(function () {
        setState(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return !state ? (
    <div>Loading...</div>
  ) : (
    <Root {...otherProps} fill={fill} height={height}>
      {children}
    </Root>
  );
};
