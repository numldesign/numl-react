import React, { useEffect, useRef, useState } from 'react';
import { El } from '@numl-react/core';

const getPlace = (place: string, value: string) => {
  const xplace = place === 'bottom' ? 'bottom' : 'top';

  return `outside-${xplace} left 1.5x ${value}%`;
};

function RangeSlider(allProps: any): JSX.Element {
  const { id, value, width = '25', tooltipPlace, ...otherProps } = allProps;
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
      // eslint-disable-next-line no-unused-expressions
      ref.current && ref.current.removeEventListener('input', setValue);
    };
  }, []);

  return (
    <El.Block use-hover box="y" width={width}>
      <El.RangeSlider
        ref={ref}
        width={width}
        id={id}
        control={`${id}[value]`}
        {...otherProps}
      />
      <El.Tooltip width="max-content" place={place} move="(-50% + .25x) 0">
        {sliderValue}
      </El.Tooltip>
    </El.Block>
  );
}

export default RangeSlider;
