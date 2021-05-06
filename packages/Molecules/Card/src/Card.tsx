import React from 'react';
import { El } from '../../../Core';

function Card(allProps: any) {
  const {
    heading,
    subheading,
    body,
    responsive = '801px|800px',
    padding = '1x 2x',
    headerActions,
    footerActions,
    bodyActions,
    children,
    ...otherProps
  } = allProps;
  return (
    <El.Card responsive={responsive} padding="1x 0x" {...otherProps}>
      <Card.Header
        padding={padding}
        heading={heading}
        subheading={subheading}
        headerActions={headerActions}
      ></Card.Header>
      <Card.Body padding={padding} body={body} bodyActions={bodyActions}></Card.Body>
      {children ? <El.Block>{children}</El.Block> : null}
      {footerActions ? <Card.Footer padding={padding} footerActions={footerActions}></Card.Footer> : null}
    </El.Card>
  );
}

Card.Header = function CardHeader(props: any) {
  const { heading, subheading, headerActions, ...otherProps } = props;
  return (
    <El.Pane gap="1x" content="stretch space-between" {...otherProps}>
      <El.BaseElement>
        {heading ? <El.Block size="lg"> {heading}</El.Block> : null}
        {subheading ? <El.Block size="xs"> {subheading}</El.Block> : null}
      </El.BaseElement>
      {typeof headerActions === 'string' ? (
        <El.Button color="special" size="lg" border="0">
          {headerActions}
        </El.Button>
      ) : (
        headerActions
      )}
    </El.Pane>
  );
};

Card.Body = function CardBody(props: any) {
  const { body, bodyActions, ...otherProps } = props;
  return (
    <El.Flex gap="1x" {...otherProps}>
      {body ? <El.Block size="md">{body}</El.Block> : null}
      {bodyActions ? (
        <El.Block flex gap="1x">
          {bodyActions}
        </El.Block>
      ) : null}
    </El.Flex>
  );
};

Card.Section = function CardSection(props: any) {
  const { heading, border = 'bottom', subheading, bodyActions, children, padding = '1.5x 0x', ...otherProps } = props;
  return (
    <El.Block border={border} padding={padding} {...otherProps}>
      <Card.Header
        padding="0.5x 2x"
        heading={heading}
        subheading={subheading}
        headerActions={bodyActions}
      ></Card.Header>
      {children ? <Card.Body padding="0.5x 2x" body={children}></Card.Body> : null}
    </El.Block>
  );
};

Card.Footer = function CardFooter(props: any) {
  const { footerActions, padding, ...otherProps } = props;
  return (
    <El.Flex content="flex-end|flex-start" gap="1x" size="md" padding="2x" {...otherProps}>
      {typeof footerActions === 'string' ? (
        <El.Pane content="flex-end" size="md" border="0">
          {footerActions}
        </El.Pane>
      ) : (
        footerActions
      )}
    </El.Flex>
  );
};

export default Card;
