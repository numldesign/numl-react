import React, { useEffect } from 'react';
import { requireNude } from '../helpers';

export default function Root(props: any) {
  let { children, onInit, fill = '', padding = 'around', ...otherProps } = props;

  useEffect(() => {
    requireNude().then((Nude: any) => {
      document.documentElement.dataset['nuIcons'] = 'ion';
      onInit && onInit(Nude);
      Nude.init();
    });
  }, []);

  return (
    <nu-root padding={padding} fill={'black'} {...otherProps}>
      {children}
    </nu-root>
  );
}
