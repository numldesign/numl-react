import * as React from 'react';
/**
 * ModalHeader memo is exported to outer library,
 * Due to performance optimization
 */
declare const ModalHeader: React.MemoExoticComponent<
  React.ForwardRefExoticComponent<
    Pick<any, string | number | symbol> & React.RefAttributes<unknown>
  >
>;
export default ModalHeader;
