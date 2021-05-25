import React from 'react';
import { El } from '@numl-react/core';

function Card(allProps: any): JSX.Element {
  const {
    heading,
    subheading,
    body,
    gap = '1x',
    padding = '2.5x',
    responsive = '801px|800px',
    headerActions,
    footerActions,
    children,
    ...otherProps
  } = allProps;
  return (
    <El.Card
      flex
      nu-card
      gap={gap}
      responsive={responsive}
      padding={padding}
      {...otherProps}
    >
      <Card.Header
        heading={heading}
        subheading={subheading}
        headerActions={headerActions}
      />
      <Card.Body body={body || children} />
      {/* {children ? <El.Pane gap="2x">{children}</El.Pane> : null} */}
      {footerActions ? <Card.Footer footerActions={footerActions} /> : null}
    </El.Card>
  );
}

Card.Header = function CardHeader(props: any) {
  const { heading, subheading, headerActions, ...otherProps } = props;
  return (
    <El.Pane nu-header gap content="stretch space-between" {...otherProps}>
      <El.Block>
        {heading ? <El.Block size="lg"> {heading}</El.Block> : null}
        {subheading ? <El.Block size="xs"> {subheading}</El.Block> : null}
      </El.Block>
      {typeof headerActions === 'string' ? (
        <El.Button color="special" clear>
          {headerActions}
        </El.Button>
      ) : (
        headerActions
      )}
    </El.Pane>
  );
};

Card.Body = function CardBody(props: any) {
  const { body, gap = '2x', ...otherProps } = props;
  return (
    <El.Flex flow="row wrap" nu-body gap={gap} {...otherProps}>
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
    padding = 'bottom 2x',
    border = 'bottom',
    subheading,
    children,
    ...otherProps
  } = props;
  return (
    <El.Block
      nu-section
      padding={padding}
      flex
      gap
      border={border}
      {...otherProps}
    >
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
