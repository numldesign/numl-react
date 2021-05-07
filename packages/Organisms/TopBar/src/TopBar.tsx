import React from 'react';
import { El } from '@numl-react/core';
import { ForunIcon } from './ForunIcon';
function TopBar(props: any) {
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

        <El.InputGroup>
          <El.Icon name="search" width="2.5em" color></El.Icon>
          <El.Input border="0" placeholder={placeholder}></El.Input>
        </El.InputGroup>

        <El.Block responsive="900px|400px">
          <El.Grid columns="1fr" items="end">
            <El.Button toggle border="0" padding="0px 10px" fill="">
              <El.Block>
                <El.Icon text="middle" name="person" padding></El.Icon>
                <El.BaseElement text="middle bold" show="y|n">
                  {username}
                </El.BaseElement>
              </El.Block>
              <El.Popup>Content</El.Popup>
            </El.Button>
          </El.Grid>
        </El.Block>
      </El.Grid>
    </El.Block>
  );
}

TopBar.propTypes = {};

export default TopBar;
