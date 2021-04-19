import {
  Button,
  Heading,
  Base,
  PropsProvider,
  Link,
  Block,
} from "@numl-react/core";

export default function () {
  return (
    <Block order="2|||1" show="y|||n" is-responsive="root">
      <Block
        display="flex"
        flow="column"
        items="stretch"
        gap="0"
        place="sticky top --topbar-offset"
        overflow="hidden auto"
        height="max (100vh - --topbar-offset)"
        padding="3x 0|||4x 0 0"
        move="-1x 0"
        is-responsive="root"
      >
        <TableOfContentSection heading="Table of contents" />
        <TableOfContentItem text="Next JS Project" to="/nextjs" />
        <TableOfContentItem text="Next JS Project" to="/nextjs" />
        <TableOfContentItem text="Next JS Project" to="/nextjs" />
        <TableOfContentItem text="Next JS Project" to="/nextjs" />
        <TableOfContentItem text="Next JS Project" to="/nextjs" />
        <TableOfContentItem text="Next JS Project" to="/nextjs" />
 
        <TableOfContentSection heading="Table of contents" />
        <TableOfContentItem text="Next JS Project" to="/nextjs" />
        <TableOfContentItem text="Next JS Project" to="/nextjs" />
        <TableOfContentItem text="Next JS Project" to="/nextjs" />
        <TableOfContentItem text="Next JS Project" to="/nextjs" />
        <TableOfContentItem text="Next JS Project" to="/nextjs" />
        
      </Block>
    </Block>
  );
}

const TableOfContentSection = ({ heading = "" }) => {
  return (
    <Heading.Two size="sm" text="up b" color="#text.60" padding="0 0 2x 1x">
      {heading}
    </Heading.Two>
  );
};

const TableOfContentItem = ({ text = "", to = "" }) => {
  return (
    <Button
      to={to}
      padding=".5x 1x"
      border="0 left outside #clear :current[1ow left outside #special]"
      color="text :current[special]"
      move="--offset :hover.current[(1ow + --offset) 0]"
      content="start"
      transition="all"
      fill="#clear"
      z="above"
      size="md"
      opacity="1 :current[1]"
      role="link"
      is-current-spy
      is-action
      is-focusable
    >
      <PropsProvider offset="0 * 1x"></PropsProvider>{" "}
      <Base text="ellipsis">{text}</Base>
    </Button>
  );
};
