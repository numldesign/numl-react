import { El } from '@numl-react/core';
import React, { useCallback, useState } from 'react';

function Carousel(allProps: any): JSX.Element {
  const {
    items,
    activeIndex,
    width = '100%',
    height = '50%',
    onPreviousClick,
    onNextClick,
    ...otherProps
  } = allProps;

  const itemList = items && items.length ? [...items] : [];

  const [slides] = useState(itemList.length);
  const [currentSlide, setCurrentSlide] = useState(activeIndex || 0);

  const handlePreviousClick = useCallback(() => {
    if (currentSlide > 0) {
      const newValue = currentSlide - 1;
      setCurrentSlide(newValue);
      onPreviousClick({ value: newValue });
    }
  }, [currentSlide]);

  const handleNextClick = useCallback(() => {
    if (currentSlide < slides - 1) {
      const newValue = currentSlide + 1;
      setCurrentSlide(newValue);
      onNextClick(newValue);
    }
  }, [currentSlide]);

  return (
    <El.Block
      style={{ position: 'relative' }}
      width={width}
      height={height}
      {...otherProps}
    >
      <El.Block overflow="hidden">
        <El.Pane flow="row nowrap" gap="0">
          {React.Children.toArray(
            items.map((_image: any) => {
              const move = currentSlide === 0 ? '0 0' : `-${currentSlide}00% 0`;
              return (
                <El.Image
                  src={_image}
                  fit="fill"
                  transition="move .2s"
                  content="center"
                  move={move}
                  height={height}
                  width={width}
                />
              );
            })
          )}
        </El.Pane>
      </El.Block>
      <El.Icon
        name="chevron-back"
        place="left"
        cursor="pointer"
        onClick={handlePreviousClick}
      />
      <El.Icon
        name="chevron-forward"
        place="right"
        cursor="pointer"
        onClick={handleNextClick}
      />
      <El.Pane content="center" place="bottom" width="100%">
        {React.Children.toArray(
          itemList.map((_item, _index) => {
            const isActive = currentSlide === _index;
            return (
              <El.Circle
                value={_index}
                size="1x"
                fill="input"
                cursor="pointer"
                opacity={isActive ? 1 : 0.5}
                onClick={() => setCurrentSlide(_index)}
              />
            );
          })
        )}
      </El.Pane>
    </El.Block>
  );
}

export default Carousel;
