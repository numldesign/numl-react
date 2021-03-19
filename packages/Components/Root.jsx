import React, { useEffect } from 'react';
import { requireNude } from '../helpers';

export default function Root({ children, onInit, ...props }) {
  useEffect(() => {
    requireNude().then((Nude) => {
      document.documentElement.dataset.nuIcons = 'ion';

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
      padding="2x"
      fill="subtle"
      {...props}
    >
      <nu-theme hue="262" />
      {children}
    </nu-root>
  );
}
