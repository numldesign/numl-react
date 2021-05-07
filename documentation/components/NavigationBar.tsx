import { El, PropsProvider } from '@numl-react/core';

export default () => {
  return (
    <El.Block
      border="bottom"
      padding="1.5x 0|||.5x 0"
      place="fixed top"
      width="100vw"
      z="10001"
      fill="#page-bg"
      is-responsive="root"
    >
      <PropsProvider grid-gap="8x||4x"></PropsProvider>
      <El.Pane gap="1gp" width="@content-width" space="around" content="space-between">
        <El.Block id="logo">
          <El.Block text="nowrap" width="@sidebar-width" gap="1x">
            <El.H2 size="xl">
              Numl React .
              <El.Button padding="1x right">
                <El.BaseElement>
                  <>Handbook</>
                </El.BaseElement>
                <El.DropdownIcon role="img" aria-hidden="true" is-provider="ion" name="chevron-down"></El.DropdownIcon>
                <El.PopupListBox size="md" gap="0" place="top -1x">
                  <El.Option value="storybook" aria-selected="false">
                    Storybook
                  </El.Option>
                  <El.Option value="handbook" aria-selected="true">
                    Handbook
                  </El.Option>
                  <El.Option value="reference" aria-selected="false">
                    Reference
                  </El.Option>
                  <El.Option value="repl" aria-selected="false">
                    REPL
                  </El.Option>
                </El.PopupListBox>
              </El.Button>
            </El.H2>
          </El.Block>
        </El.Block>
        <El.Block grow="1" show="y||n" is-responsive="root">
          <El.Block>
            <El.InputGroup
              radius
              fill="^root #subtle :dark[#input]"
              border="hidden :hover[#special.50]"
              transition="all"
            >
              <El.Icon name="search" opacity=".5" padding="0 1x" role="img" grow="0" />
              <El.Search
                grow="1"
                fill="#clear"
                placeholder="Search (Press '/' to focus)"
                use-hotkey="/"
                border="0"
              ></El.Search>
            </El.InputGroup>
          </El.Block>
        </El.Block>
        <El.Pane content="space-between" width="@sidebar-width|||auto" size="lg" gap="1x" is-responsive="root">
          v0.1.0
        </El.Pane>
      </El.Pane>
    </El.Block>
  );
};
