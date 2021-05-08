import { El } from "@numl-react/core";

export default () => {
  return (
    <El.Block
      show="n|||y"
      space="around"
      width="--content-width"
      padding="2x 0"
      is-responsive="root"
    >
      <El.Block box="y" section="handbook">
        sdasdasdasd
        <El.InputGroup
          radius
          fill="^root #subtle :dark[#input]"
          border="hidden :hover[#special.50]"
          transition="all"
          use-hover
          role="group"
          is-placeholder
        >
          jkdhfjkshdkf
        </El.InputGroup>
      </El.Block>
    </El.Block>
  );
};
