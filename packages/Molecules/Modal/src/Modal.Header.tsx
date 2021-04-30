import { El } from '../../../entry';

/***
 * Modal Header
 */
const ModalHeaderFactory = React.forwardRef((props, ref) => {
  const {
    padding = '2x',
    items = 'start',
    content = 'space-between',
    border = 'bottom',
    gap = '1',
    heading,
    onCloseAction,
    children,
    ...otherProps
  }: any = props;
  return (
    <El.Pane
      ref={ref}
      block
      items={items}
      content={content}
      border={border}
      padding={padding}
      gap={gap}
      {...otherProps}
    >
      {typeof heading === 'string' ? <El.Base size="md">{heading}</El.Base> : heading}
      {onCloseAction ? (
        <El.Button cursor="pointer" border="0" onTap={onCloseAction}>
          <El.Icon size="md" name="close-outline"></El.Icon>
        </El.Button>
      ) : null}
    </El.Pane>
  );
});
ModalHeaderFactory.displayName = 'ModalHeader';

const ModalHeader = React.memo(ModalHeaderFactory);

export default ModalHeader;
