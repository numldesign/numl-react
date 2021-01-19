import React, { useEffect } from 'react';
import { requireNude } from '../helpers';

export default function Root({ children, onInit, ...props }) {
  useEffect(() => {
    requireNude()
      .then(Nude => {
        onInit(Nude);

        Nude.init();
      });
  }, []);

  return <nu-root
    style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
    {...props}>
    { children }
  </nu-root>;
}
