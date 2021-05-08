import * as React from 'react';
import { El } from '@numl-react/core';

/**
 * Modal Body
 * @param props
 * @returns
 */
const ModalBodyForwardRef = React.forwardRef((props: any, ref) => {
  const { padding = '2x', border = 'bottom', items = 'start', children, ...otherProps } = props;
  return (
    <El.Pane block ref={ref} border={border} items={items} padding={padding} {...otherProps}>
      {children}
    </El.Pane>
  );
});
ModalBodyForwardRef.displayName = 'ModalBody';

/**
 * ModalFooter memo is exported to outer library,
 * Due to performance optimization
 */
const ModalBody = React.memo(ModalBodyForwardRef);
ModalBody.displayName = 'ModalBody';

export default ModalBody;
