import React, { useEffect } from 'react';
import { requireNude } from '../helpers';
import "numl/dist/index"

export function Root(props: any) {
  let { children, onInit, padding = 'around', ...otherProps } = props;

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
      <nu-theme hue="290" saturation="75"></nu-theme>
      <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
      {children}
    </nu-root>
  );
}
