import React from 'react';
import { El } from '@numl-react/core';

function Card(allProps: any): JSX.Element {
  const {
    heading,
    subheading,
    body,
    responsive = '801px|800px',
    padding = '1.25',
    headerActions,
    footerActions,
    children,
    ...otherProps
  } = allProps;
  return (
    <El.Card
      flex
      gap="1.5x"
      responsive={responsive}
      padding={padding}
      {...otherProps}
    >
      <Card.Header
        heading={heading}
        subheading={subheading}
        headerActions={headerActions}
      />
      <Card.Body body={body} />
      {children ? <El.Block>{children}</El.Block> : null}
      {footerActions ? <Card.Footer footerActions={footerActions} /> : null}
    </El.Card>
  );
}

Card.Header = function CardHeader(props: any) {
  const { heading, subheading, headerActions, ...otherProps } = props;
  return (
    <El.Pane
      gap
      padding="0.5 0"
      content="stretch space-between"
      {...otherProps}
    >
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
  const { body, ...otherProps } = props;
  return (
    <El.Flex gap {...otherProps} padding="0.5 bottom">
      {body && typeof body === 'string' ? (
        <El.Block size="md">{body}</El.Block>
      ) : (
        body
      )}
    </El.Flex>
  );
};

Card.Section = function CardSection(props: any) {
  const {
    heading,
    border = 'bottom',
    subheading,
    children,
    ...otherProps
  } = props;
  return (
    <El.Block flex gap padding="0.5 0" border={border} {...otherProps}>
      <Card.Header heading={heading} subheading={subheading} />
      {children ? <Card.Body body={children} /> : null}
    </El.Block>
  );
};

Card.Footer = function CardFooter(props: any) {
  const { footerActions, ...otherProps } = props;
  return (
    <El.Flex content="flex-end|flex-start" gap="1x" size="md" {...otherProps}>
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
