import React, { useEffect, useRef, useState } from 'react';
import { El } from '@numl-react/core';

const getPlace = (place: string, value: string) => {
  place = place === 'bottom' ? 'bottom' : 'top';

  return `outside-${place} left 1.5x ${value}%`;
};

function RangeSlider(allProps: any): JSX.Element {
  const { id, value, tooltipPlace, ...otherProps } = allProps;
  const [sliderValue, setSliderValue] = useState(value || 0);
  const ref: any = useRef();

  const place = getPlace(tooltipPlace, sliderValue);

  useEffect(() => {
    function setValue(evt: any) {
      setSliderValue(evt.detail);
    }

    if (ref.current) {
      ref.current.addEventListener('input', setValue);
    }

    return () => {
      ref.current && ref.current.removeEventListener('input', setValue);
    };
  }, []);

  return (
    <El.Block use-hover box="y">
      <El.RangeSlider ref={ref} id={id} control={`${id}[value]`} {...otherProps} />
      <El.Tooltip width="max-content" place={place} move="(-50% + .25x) 0">
        {sliderValue}
      </El.Tooltip>
    </El.Block>
  );
}

export default RangeSlider;
