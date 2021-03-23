import T from 'prop-types';
import React, { useCallback, useState } from 'react';
import { Icon } from '../../Atoms/Icon';
import { TCarouselProps } from './Carousel.type';

function Carousel(allProps: TCarouselProps): JSX.Element {
  const {
    items,
    activeIndex,
    onPreviousClick = () => { },
    onNextClick = () => { },
    ...otherProps
  } = allProps;

  const itemList = items && items.length ? [...items] : [];

  const [slides] = useState(itemList.length);
  const [currentSlide, setCurrentSlide] = useState(activeIndex || 0);

  const handlePreviousClick = useCallback(
    () => {
      if (currentSlide > 0) {
        const newValue = currentSlide - 1;
        setCurrentSlide(newValue);
        onPreviousClick({ value: newValue });
      }
    },
    [currentSlide]
  );

  const handleNextClick = useCallback(
    () => {
      if (currentSlide < slides - 1) {
        const newValue = currentSlide + 1;
        setCurrentSlide(newValue);
        onNextClick(newValue);
      }
    },
    [currentSlide]
  );

  return (
    <nu-block style={{ position: 'relative' }} {...otherProps}>
      <nu-block overflow="hidden">
        <nu-pane flow="row nowrap" gap="0" width={`${slides}00%`}>
          {items.map((_image: any, _index: any) => {
            const move = currentSlide === 0 ? '0 0' : `-${currentSlide}00% 0`;
            return (
              <nu-flex
                key={_index}
                width="100%"
                move={move}
                transition="move .2s"
                content="center"
              >
                <nu-img src={_image} fit="fill"></nu-img>
              </nu-flex>
            );
          })}
        </nu-pane>
      </nu-block>
      <Icon
        name="chevron-back"
        place="left"
        cursor="pointer"
        onClick={handlePreviousClick}
      />
      <Icon
        name="chevron-forward"
        place="right"
        cursor="pointer"
        onClick={handleNextClick}
      />
      <nu-pane content="center" place="bottom" width="100%">
        {itemList.map((_item, _index) => {
          const isActive = currentSlide === _index;
          return (
            <nu-circle
              key={_index}
              value={_index}
              size="1x"
              fill="input"
              cursor="pointer"
              opacity={isActive ? 1 : 0.5}
              onClick={() => setCurrentSlide(_index)}
            />
          );
        })}
      </nu-pane>
    </nu-block>
  );
}

Carousel.propTypes = {
  items: T.array,
  activeIndex: T.number,
  onPreviousClick: T.func,
  onNextClick: T.func,
};

export default Carousel;