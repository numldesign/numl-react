import React from 'react';
import { ForunIcon } from './ForunIcon';

function TopBar(props) {
  /** working on this */
  let { placeholder, nuLinkAction, logo, username, menuIcon, ...otherprops } = props;
  return (
    <El.Block>
      <nu-grid
        responsive="1300px|1000px|800px|400px"
        gap="36x|14x|8x|1x"
        columns="auto 4fr auto|auto 3fr auto|auto 2fr auto|auto 2fr auto"
        items="center stretch"
        padding
      >
        <El.Block row="1">
          <El.Block to={nuLinkAction} show="y|y|n|n">
            {logo ? logo : <ForunIcon></ForunIcon>}
          </El.Block>
          <nu-icon color=":active[#special]" name={menuIcon ? menuIcon : 'menu-outline'} show="n|n|y|y"></nu-icon>
        </El.Block>

        <nu-inputgroup>
          <nu-icon name="search" width="2.5em" color></nu-icon>
          <nu-input border="0" placeholder={placeholder}></nu-input>
        </nu-inputgroup>

        <El.Block responsive="900px|400px">
          <nu-grid columns="1fr" items="end">
            <nu-btn toggle border="0" padding="0px 10px" fill="">
              <El.Block>
                <nu-icon text="middle" name="person" padding></nu-icon>
                <nu-el text="middle bold" show="y|n">
                  {username}
                </nu-el>
              </El.Block>
              <nu-popup>Content</nu-popup>
            </nu-btn>
          </nu-grid>
        </El.Block>
      </nu-grid>
    </El.Block>
  );
}

TopBar.propTypes = {};

export default TopBar;
