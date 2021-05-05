import React from 'react';
import { ForunIcon } from './../../TopBar/src/ForunIcon';

function ContextualSaveBar(props) {
  /** working on this */
  let { message, buttonWidth = '5.25rem', ...otherprops } = props;
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
      <nu-in show="y|n">
        <ForunIcon></ForunIcon>
      </nu-in>
      <nu-in>
        <El.BaseElement text={`bold`} color="#bg">
          {message}
        </El.BaseElement>
      </nu-in>
      <nu-btngroup gap border="0" fill="">
        <nu-btn fill="#bg" radius width={buttonWidth}>
          Discard
        </nu-btn>
        <nu-btn fill="special-bg" radius width={buttonWidth}>
          Save
        </nu-btn>
      </nu-btngroup>
    </El.Grid>
  );
}

ContextualSaveBar.propTypes = {};

export default ContextualSaveBar;
