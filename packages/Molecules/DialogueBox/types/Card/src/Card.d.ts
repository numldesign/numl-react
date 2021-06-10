declare function Card(allProps: any): JSX.Element;
declare namespace Card {
  var Header: (props: any) => JSX.Element;
  var Body: (props: any) => JSX.Element;
  var Section: (props: any) => JSX.Element;
  var Footer: (props: any) => JSX.Element;
}
export default Card;
