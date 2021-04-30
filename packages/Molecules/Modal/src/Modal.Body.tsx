import { El } from '../../../entry';

/**
 * Modal Body
 * @param props
 * @returns
 */
const ModalBodyFactory = function (props: any) {
  const { padding = '2x', border = 'bottom', items = 'start', children, ...otherProps } = props;
  return (
    <El.Pane block border={border} items={items} padding={padding} {...otherProps}>
      {children}
    </El.Pane>
  );
};
ModalBodyFactory.displayName = 'ModalBody';
const ModalBody = React.memo(ModalBodyFactory);

export default ModalBody;
