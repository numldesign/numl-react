/* eslint-disable no-unused-expressions */
/* eslint-disable dot-notation */
import { LoadNuml, ResponsiveUtility } from '@numl-react/utility';
import React, { useEffect, useState } from 'react';
import { Root } from '../../Root';

const NumlProvider = function (props: any) {
  const {
    icons = 'ion',
    theme = 'auto',
    children,
    xs = '576px',
    sm = '768px',
    md = '992px',
    lg = '1200px',
    xl = '1800px',
    onInit,
    height = '100%',
    fill,
    ...otherProps
  } = props;
  const [state, setState] = useState(false);
  const { responsive } = ResponsiveUtility({ xs, sm, md, lg, xl });

  useEffect(() => {
    LoadNuml()
      .then((Nude: any) => {
        Nude.scheme && Nude.scheme(theme);
        Nude.init();
        document.documentElement.dataset['nuIcons'] = icons;
        document.documentElement.dataset['nuScheme'] = theme;
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
    <Root fill={fill} height={height} responsive={responsive} {...otherProps}>
      {children}
    </Root>
  );
};

export { NumlProvider };
