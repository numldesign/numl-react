import { El } from '@numl-react/core';
import React from 'react';

function Card(allProps: any): JSX.Element {
  const {
    heading,
    subheading,
    body,
    gap = '1x',
    padding = '2.5x',
    headerActions,
    headerProps,
    footerProps,
    footerActions,
    children,
    ...otherProps
  } = allProps;
  return (
    <El.Card flex nu-card gap={gap} padding={padding}>
      <Card.Header
        gap={gap}
        heading={heading}
        subheading={subheading}
        headerActions={headerActions}
        {...headerProps}
      />
      <Card.Body gap={gap} {...otherProps}>
        {body || children}
      </Card.Body>
      {footerActions ? (
        <Card.Footer gap={gap} footerActions={footerActions} {...footerProps} />
      ) : null}
    </El.Card>
  );
}

Card.Header = function CardHeader(props: any): JSX.Element {
  const {
    heading,
    subheading,
    gap = '1x',
    headerActions,
    ...otherProps
  } = props;
  return (
    <>
      {heading || subheading || headerActions ? (
        <El.Pane
          nu-header
          gap={gap}
          content="stretch space-between"
          {...otherProps}
        >
          <El.Block>
            {heading ? <El.Block size="lg"> {heading}</El.Block> : null}
            {subheading ? <El.Block size="xs"> {subheading}</El.Block> : null}
          </El.Block>
          <El.Block gap={gap}>{headerActions || null}</El.Block>
        </El.Pane>
      ) : null}
    </>
  );
};

Card.Body = function CardBody(props: any): JSX.Element {
  const { body, children, gap = '1x', ...otherProps } = props;
  return (
    <El.Flow nu-body gap={gap} {...otherProps}>
      {React.Children.toArray(body || children)}
    </El.Flow>
  );
};

Card.Section = function CardSection(props: any): JSX.Element {
  const {
    heading,
    subheading,
    gap = '1x',
    body,
    children,
    headerProps,
    ...otherProps
  } = props;
  return (
    <El.Block nu-section flex gap={gap}>
      <Card.Header heading={heading} subheading={subheading} {...headerProps} />
      <Card.Body {...otherProps}>{body || children}</Card.Body>
    </El.Block>
  );
};

Card.Footer = function CardFooter(props: any): JSX.Element {
  const {
    footerActions,
    content = 'flex-end|flex-end|flex-end|flex-start',
    gap = '1x',
    ...otherProps
  } = props;
  return (
    <El.Flex content={content} gap={gap} {...otherProps}>
      {footerActions || null}
    </El.Flex>
  );
};

export default Card;
