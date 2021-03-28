import React from 'react';
import { ForunIcon } from './../../TopBar/src/ForunIcon';

function ContextualSaveBar(props) {
  /** working on this */
  let { message, buttonWidth = '5.25rem', ...otherprops } = props;
  return (
    <nu-grid
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
        <nu-el text={`bold`} color="#bg">
          {message}
        </nu-el>
      </nu-in>
      <nu-btngroup gap border="0" fill="">
        <nu-btn fill="#bg" radius width={buttonWidth}>
          Discard
        </nu-btn>
        <nu-btn fill="special-bg" radius width={buttonWidth}>
          Save
        </nu-btn>
      </nu-btngroup>
    </nu-grid>
  );
}

ContextualSaveBar.propTypes = {};

export default ContextualSaveBar;
