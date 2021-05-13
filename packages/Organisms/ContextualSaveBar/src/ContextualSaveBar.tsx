import React from 'react';
import { El } from '@numl-react/core';
import { ForunIcon } from '../../TopBar/src/ForunIcon';

function ContextualSaveBar(props: any) {
  /** working on this */

  const { message, buttonWidth = '5.25rem' } = props;
  return (
    <El.Grid
      padding="0.563rem 0.1rem"
      fill="#light"
      responsive="62.5rem|56.25rem"
      gap
      columns="1fr 2fr 1fr|auto auto"
      content="space-between"
      items="center"
    >
      <El.Inline show="y|n">
        <ForunIcon />
      </El.Inline>
      <El.Inline>
        <El.BaseElement text="bold" color="#bg">
          {message}
        </El.BaseElement>
      </El.Inline>
      <El.ButtonGroup gap border="0" fill="">
        <El.Button fill="#bg" radius width={buttonWidth}>
          Discard
        </El.Button>
        <El.Button fill="special-bg" radius width={buttonWidth}>
          Save
        </El.Button>
      </El.ButtonGroup>
    </El.Grid>
  );
}

export default ContextualSaveBar;
