import { Block } from '@numl-react/core';

export default (props) => {
  const { data } = props;
  return (
    <Block show="n|||y" space="around" width="--content-width" padding="2x 0" is-responsive="root">
      <Block box="y" section="handbook">
        sdasdasdasd
        <nu-inputgroup
          radius
          fill="^root #subtle :dark[#input]"
          border="hidden :hover[#special.50]"
          transition="all"
          use-hover
          role="group"
          is-placeholder
        >
          jkdhfjkshdkf
        </nu-inputgroup>
      </Block>
    </Block>
  );
};
