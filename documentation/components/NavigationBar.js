import {
    Button,
    PropsProvider,
    Base,
    Block,
    Pane,
    Flow,
    Heading,
    Svg,
  } from "@numl-react/core";
import { Icon } from "@numl-react/icon";
  
export default ({ children }) => {
    return (
        <Block
          border="bottom"
          padding="1.5x 0|||.5x 0"
          place="fixed top"
          width="100vw"
          z="10001"
          fill="#page-bg"
          is-responsive="root"
        >
          <PropsProvider grid-gap="8x||4x"></PropsProvider>
          <Pane
            gap="1gp"
            width="@content-width"
            space="around"
            content="space-between"
          >
            <Block id="logo">
              <Block text="nowrap" width="@sidebar-width" gap="1x">
                <Heading.Two size="xl">
                  Numl React .
                  <Button padding="1x right">
                    <Base>
                      <nu-value>Handbook</nu-value>
                    </Base>
                    <nu-dropdownicon
                      role="img"
                      aria-hidden="true"
                      is-provider="ion"
                      name="chevron-down"
                    ></nu-dropdownicon>
                    <nu-popuplistbox size="md" gap="0" place="top -1x">
                      <nu-option value="storybook" aria-selected="false">
                        Storybook
                      </nu-option>
                      <nu-option value="handbook" aria-selected="true">
                        Handbook
                      </nu-option>
                      <nu-option value="reference" aria-selected="false">
                        Reference
                      </nu-option>
                      <nu-option value="repl" aria-selected="false">
                        REPL
                      </nu-option>
                    </nu-popuplistbox>
                  </Button>
                </Heading.Two>
              </Block>
            </Block>
            <Block grow="1" show="y||n" is-responsive="root">
              <Block>
                <nu-inputgroup
                  radius
                  fill="^root #subtle :dark[#input]"
                  border="hidden :hover[#special.50]"
                  transition="all"
                >
                  <Icon
                    name="search"
                    opacity=".5"
                    padding="0 1x"
                    role="img"
                    grow="0"
                  />
                  <nu-search
                    grow="1"
                    fill="#clear"
                    placeholder="Search (Press '/' to focus)"
                    use-hotkey="/"
                    border="0"
                  ></nu-search>
                </nu-inputgroup>
              </Block>
            </Block>
            <Pane
              content="space-between"
              width="@sidebar-width|||auto"
              size="lg"
              gap="1x"
              is-responsive="root"
            >
              v0.1.0
            </Pane>
          </Pane>
        </Block>
    )
}