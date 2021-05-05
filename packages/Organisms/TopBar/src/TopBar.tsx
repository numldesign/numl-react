import React from 'react';
import { ForunIcon } from './ForunIcon';

function TopBar(props) {
  /** working on this */
  let { placeholder, nuLinkAction, logo, username, menuIcon, ...otherprops } = props;
  return (
    <El.Block>
      <El.Grid
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
          <El.Icon color=":active[#special]" name={menuIcon ? menuIcon : 'menu-outline'} show="n|n|y|y"></El.Icon>
        </El.Block>

        <nu-inputgroup>
          <El.Icon name="search" width="2.5em" color></El.Icon>
          <nu-input border="0" placeholder={placeholder}></nu-input>
        </nu-inputgroup>

        <El.Block responsive="900px|400px">
          <El.Grid columns="1fr" items="end">
            <nu-btn toggle border="0" padding="0px 10px" fill="">
              <El.Block>
                <El.Icon text="middle" name="person" padding></El.Icon>
                <El.BaseElement text="middle bold" show="y|n">
                  {username}
                </El.BaseElement>
              </El.Block>
              <nu-popup>Content</nu-popup>
            </nu-btn>
          </El.Grid>
        </El.Block>
      </El.Grid>
    </El.Block>
  );
}

TopBar.propTypes = {};

export default TopBar;
