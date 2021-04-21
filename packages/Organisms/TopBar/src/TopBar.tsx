import React from 'react';
import { ForunIcon } from './ForunIcon';

function TopBar(props) {
  /** working on this */
  let { placeholder, nuLinkAction, logo, username, menuIcon, ...otherprops } = props;
  return (
    <nu-block>
      <nu-grid
        responsive="1300px|1000px|800px|400px"
        gap="36x|14x|8x|1x"
        columns="auto 4fr auto|auto 3fr auto|auto 2fr auto|auto 2fr auto"
        items="center stretch"
        padding
      >
        <nu-block row="1">
          <nu-block to={nuLinkAction} show="y|y|n|n">
            {logo ? logo : <ForunIcon></ForunIcon>}
          </nu-block>
          <nu-icon color=":active[#special]" name={menuIcon ? menuIcon : 'menu-outline'} show="n|n|y|y"></nu-icon>
        </nu-block>

        <nu-inputgroup>
          <nu-icon name="search" width="2.5em" color></nu-icon>
          <nu-input border="0" placeholder={placeholder}></nu-input>
        </nu-inputgroup>

        <nu-block responsive="900px|400px">
          <nu-grid columns="1fr" items="end">
            <nu-btn toggle border="0" padding="0px 10px" fill="">
              <nu-block>
                <nu-icon text="middle" name="person" padding></nu-icon>
                <nu-el text="middle bold" show="y|n">
                  {username}
                </nu-el>
              </nu-block>
              <nu-popup>Content</nu-popup>
            </nu-btn>
          </nu-grid>
        </nu-block>
      </nu-grid>
    </nu-block>
  );
}

TopBar.propTypes = {};

export default TopBar;
