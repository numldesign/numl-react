import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useEventListener = (
  eventType = '',
  listener = () => null,
  target: any = window,
  options = null
) => {
  const savedListener: any = useRef();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target?.addEventListener) return;

    const eventListener = (event) => savedListener.current(event);

    target.addEventListener(eventType, eventListener, options);

    // eslint-disable-next-line consistent-return
    return () => {
      target.removeEventListener(eventType, eventListener, options);
    };
  }, [eventType, target, options]);
};

export { useEventListener };
