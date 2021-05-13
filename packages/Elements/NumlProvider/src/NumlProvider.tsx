/* eslint-disable no-unused-expressions */
/* eslint-disable dot-notation */
import React, { useEffect, useState } from 'react';
import { LoadNuml } from '@numl-react/utility';
import { Root } from '../../Root';

const NumlProvider = function (props: any) {
  const {
    icons = 'ion',
    theme = 'dark',
    children,
    onInit,
    height = '100%',
    fill,
    ...otherProps
  } = props;
  const [state, setState] = useState(false);
  useEffect(() => {
    LoadNuml()
      .then((Nude: any) => {
        Nude.scheme && Nude.scheme(theme);
        Nude.init();
        document.documentElement.dataset['nuIcons'] = icons;
        document.documentElement.dataset['scheme'] = theme;
        // eslint-disable-next-line no-unused-expressions
        onInit && onInit();
      })
      .then(() => {
        setState(true);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return !state ? (
    <div>Loading...</div>
  ) : (
    <Root fill={fill} height={height} {...otherProps}>
      {children}
    </Root>
  );
};

export { NumlProvider };
