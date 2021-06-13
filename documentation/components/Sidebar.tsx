import { El } from '@numl-react/core';
import React from 'react';
export default (props: any) => {
  const { data } = props;
  return (
    <El.Nav
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
      {data && typeof data === 'object' && data.length > 0
        ? React.Children.toArray(
            data.map(function (eachData: any) {
              const { heading, children } = eachData;
              return (
                <>
                  <El.H2
                    size="sm"
                    text="up b"
                    color="#text.60"
                    padding="0 0 1x 1x"
                  >
                    {heading}
                  </El.H2>
                  <NavigationList data={children} />
                </>
              );
            })
          )
        : null}
    </El.Nav>
  );
};

const NavigationList = (props: any) => {
  const { data } = props;
  return (
    <>
      {data && typeof data === 'object' && data.length > 0
        ? React.Children.toArray(
            data.map((eachChild: any) => {
              return (
                <El.Button
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
                </El.Button>
              );
            })
          )
        : null}
    </>
  );
};
