import * as React from 'react';
/**
 * ModalFooter memo is exported to outer library,
 * Due to performance optimization
 */
declare const ModalBody: React.MemoExoticComponent<
  React.ForwardRefExoticComponent<
    Pick<any, string | number | symbol> & React.RefAttributes<unknown>
  >
>;
export default ModalBody;
