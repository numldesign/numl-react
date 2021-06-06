declare function Form(props: any): JSX.Element;
declare namespace Form {
  var Label: (allProps: any) => JSX.Element;
  var Field: (allProps: any) => JSX.Element;
  var Input: (props: any) => JSX.Element;
  var Check: (allProps: any) => JSX.Element;
  var Submit: (allProps: any) => JSX.Element;
}
export default Form;
