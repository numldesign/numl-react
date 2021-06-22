declare function Button(props: any): JSX.Element;
declare namespace Button {
  var Small: (props: any) => JSX.Element;
  var Medium: (props: any) => JSX.Element;
  var Large: (props: any) => JSX.Element;
  var ExtraLarge: (props: any) => JSX.Element;
  var Label: (props: any) => JSX.Element;
  var Icon: (props: any) => JSX.Element;
  var Popup: (props: any) => JSX.Element;
  var Item: (props: any) => JSX.Element;
  var Checkbox: (props: any) => JSX.Element;
  var Group: (allProps: any) => JSX.Element;
  var SegmentedGroup: (allProps: any) => JSX.Element;
}
export default Button;
