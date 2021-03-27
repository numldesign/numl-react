import React, { useEffect } from 'react';
import { requireNude } from '../helpers';

export default function Root(props: any) {
  let { children, onInit, padding = '2x', ...otherProps } = props;

  useEffect(() => {
    requireNude().then((Nude: any) => {
      document.documentElement.dataset['nuIcons'] = 'ion';
      onInit && onInit(Nude);
      Nude.init();
    });
  }, []);

  return (
    <nu-root
      style={{
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
      padding={padding}
      fill="subtle"
      {...otherProps}
    >
      <nu-theme hue="262" />
      {children}
    </nu-root>
  );
}
