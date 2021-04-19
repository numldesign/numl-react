import { Base, Heading, Button } from "@numl-react/core";
export default (props) => {
  const { data } = props;
  return (
    <nu-nav
      label="Main"
      display="flex"
      flow="column"
      items="stretch"
      gap="0"
      place="sticky top --topbar-offset"
      overflow="hidden auto"
      height="min (100vh - --topbar-offset)|||max (100vh - --topbar-offset - 9x)"
      padding="4x 1x 4x 0|||0 1cp 4x"
      space="1x left"
      is-responsive="root"
    >
      {data.map(function (eachData, key) {
        const { heading, children } = eachData;
        return (
          <>
            <Heading.Two
              size="sm"
              text="up b"
              color="#text.60"
              padding="0 0 1x 1x"
              key={key}
            >
              {heading}
            </Heading.Two>
            <NavigationList data={children} />
          </>
        );
      })}
    </nu-nav>
  );
};

const NavigationList = ({ data }) => {
  return (
    <>
      {data.length > 0 &&
        data.map((eachChild, key) => {
          return (
            <Button
              key={key}
              to={eachChild.link}
              padding=".5x 1x"
              color="text :current.hover.focus[special]"
              fill="#clear"
              mark="no :current[y]"
              inset="no"
              border="0"
              content="start"
              opacity="1"
              is-action
              is-input
              tabindex="0"
              is-focusable
            >
              {eachChild.value}
            </Button>
          );
        })}
    </>
  );
};
