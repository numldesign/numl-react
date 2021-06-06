import * as React from 'react';
/**
 * Modal memo is exported to outer library,
 * Due to performance optimization
 */
declare const Modal: React.MemoExoticComponent<
  React.ForwardRefExoticComponent<
    Pick<any, string | number | symbol> & React.RefAttributes<unknown>
  >
>;
export default Modal;
