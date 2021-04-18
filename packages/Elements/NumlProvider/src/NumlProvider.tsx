import React, { useEffect, useState } from 'react';
import { LoadNuml } from '../../../helpers';
import Root from '../../Root';

export const NumlProvider = (props: any) => {
  const { children, onInit, height = '100%', fill, ...otherProps } = props;
  let [status, setStatus] = useState(false);

  useEffect(() => {
    if (!status) {
      LoadNuml()
        .then((Nude: any) => {
          Nude.init();
          document.documentElement.dataset['nuIcons'] = 'ion';
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
