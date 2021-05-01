import { El } from '../../../entry';

/**
 * Modal Body
 * @param props
 * @returns
 */
const ModalBody = function (props: any) {
  const { padding = '2x', border = 'bottom', items = 'start', children, ...otherProps } = props;
  return (
    <El.Pane block border={border} items={items} padding={padding} {...otherProps}>
      {children}
    </El.Pane>
  );
};
ModalBody.displayName = 'ModalBody';
export default ModalBody;
