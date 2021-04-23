import React, { useEffect, useState } from 'react';
import { LoadNuml } from '../../../helpers';
import Root from '../../Root';

export const NumlProvider = (props: any) => {
  const { icons = 'ion', theme = 'dark', children, onInit, height = '100%', fill, ...otherProps } = props;
  let [status, setStatus] = useState(false);

  useEffect(() => {
    if (!status) {
      LoadNuml()
        .then((Nude: any) => {
          window.Nude = Nude;
          Nude.init();
          document.documentElement.dataset['nuIcons'] = icons;
          document.documentElement.dataset['scheme'] = theme;
          window.Nude.scheme(theme);
          onInit && onInit(Nude);
          setStatus(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    status && (
      <Root {...otherProps} fill={fill} height={height}>
        {children}
      </Root>
    )
  );
};
