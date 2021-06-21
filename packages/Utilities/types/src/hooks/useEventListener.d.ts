import { RefObject } from 'react';
declare function useEventListener<T extends HTMLElement = HTMLDivElement>(
  eventName: keyof WindowEventMap,
  handler: (event: Event) => void,
  element?: RefObject<T>
): void;
export { useEventListener };
