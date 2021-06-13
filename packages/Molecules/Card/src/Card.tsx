import { El } from '@numl-react/core';
import React from 'react';

function Card(allProps: any): JSX.Element {
  const {
    heading,
    subheading,
    body,
    gap = '1x',
    padding = '2.5x',
    responsive = '801px|800px',
    headerActions,
    headerProps,
    footerProps,
    footerActions,
    children,
    ...otherProps
  } = allProps;
  return (
    <El.Card flex nu-card gap={gap} responsive={responsive} padding={padding}>
      <Card.Header
        heading={heading}
        subheading={subheading}
        headerActions={headerActions}
        {...headerProps}
      />
      <Card.Body body={body || children} {...otherProps} />
      {footerActions ? (
        <Card.Footer footerActions={footerActions} {...footerProps} />
      ) : null}
    </El.Card>
  );
}

Card.Header = function CardHeader(props: any) {
  const { heading, subheading, headerActions, ...otherProps } = props;
  return (
    <>
      {heading || subheading || headerActions ? (
        <El.Pane nu-header gap content="stretch space-between" {...otherProps}>
          <El.Block>
            {heading ? <El.Block size="lg"> {heading}</El.Block> : null}
            {subheading ? <El.Block size="xs"> {subheading}</El.Block> : null}
          </El.Block>
          <El.Block>{headerActions || null}</El.Block>
        </El.Pane>
      ) : null}
    </>
  );
};

Card.Body = function CardBody(props: any) {
  const { body, gap = '2x', ...otherProps } = props;
  return (
    <El.Flow nu-body gap={gap} {...otherProps}>
      {body || null}
    </El.Flow>
  );
};

Card.Section = function CardSection(props: any) {
  const {
    heading,
    padding = 'bottom 2x',
    border = 'bottom',
    subheading,
    children,
    headerProps,
    ...otherProps
  } = props;
  return (
    <El.Block nu-section padding={padding} flex gap border={border}>
      <Card.Header heading={heading} subheading={subheading} {...headerProps} />
      {children ? <Card.Body {...otherProps}>{children}</Card.Body> : null}
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
