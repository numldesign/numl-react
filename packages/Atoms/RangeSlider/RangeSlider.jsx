import T from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const getPlace = (place, value) => {
  place = place === 'bottom' ? 'bottom' : 'top';

  return `outside-${place} left 1.5x ${value}%`;
};

export default function RangeSlider(allProps) {
  const { id, value, tooltipPlace, ...otherProps } = allProps;
  const [sliderValue, setSliderValue] = useState(value || 0);
  const ref = useRef();

  const place = getPlace(tooltipPlace, sliderValue);

  useEffect(() => {
    function setValue(evt) {
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
    <nu-block use-hover box="y">
      <nu-slider ref={ref} id={id} control={`${id}[value]`} {...otherProps} />
      <nu-tooltip width="max-content" place={place} move="(-50% + .25x) 0">
        {sliderValue}
      </nu-tooltip>
    </nu-block>
  );
}

RangeSlider.propTypes = {
  id: T.string,
  size: T.string,
  min: T.string,
  max: T.string,
  value: T.string,
  step: T.string,
};
