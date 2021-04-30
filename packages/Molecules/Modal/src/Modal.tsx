import * as React from 'react';
import { El } from '../../../entry';
import ModalBody from './Modal.Body';
import ModalFooter from './Modal.Footer';
import ModalHeader from './Modal.Header';

const ModalFactory: any = React.forwardRef((props, ref: any) => {
  const {
    heading,
    onCloseAction,
    place = 'inside',
    fill = 'bg',
    box = 'y',
    show = 'n',
    radius = '0.5',
    children,
    body,
    footerActions,
    closeAction,
    ...otherProps
  }: any = props;

  return (
    <El.Block
      ref={ref}
      shadow
      nu-overlay
      place={place}
      fill={fill}
      box={box}
      radius={radius}
      show={show}
      {...otherProps}
    >
      {heading && <ModalFactory.Header flex heading={heading} onCloseAction={onCloseAction}></ModalFactory.Header>}

      {body ? <ModalFactory.Body> {body} </ModalFactory.Body> : { ...children }}

      {footerActions && <ModalFactory.Footer> {footerActions} </ModalFactory.Footer>}
    </El.Block>
  );
});
ModalFactory.displayName = 'Modal';

const Modal: any = React.memo(ModalFactory);
Modal.displayName = 'Modal';

Modal.Header = ModalHeader;
Modal.Header.displayName = 'ModalHeader';

Modal.Body = ModalBody;
Modal.Body.displayName = 'ModalBody';

Modal.Footer = ModalFooter;
Modal.Footer.displayName = 'ModalFooter';

export default Modal;
