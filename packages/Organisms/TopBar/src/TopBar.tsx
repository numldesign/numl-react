import React from 'react';
import { ForunIcon } from './ForunIcon';

function TopBar(props) {
  /** working on this */
  let {
    placeholder,
    nuLinkAction,
    logo,
    username = 'Jhon Doe',
    menuIcon,
    children,
    ...otherprops
  } = props;
  return (
    <nu-block fill="#base" padding responsive="1334px|1022px|766px|318px">
      <nu-grid
        gap="36x|14x|8x|1x"
        columns="auto 4fr auto|auto 3fr auto|auto 2fr auto|auto 2fr auto"
        items="center stretch"
      >
        <nu-block row="1">
          <nu-block to={nuLinkAction} show="y|y|n|n">
            {logo ? logo : <ForunIcon></ForunIcon>}
          </nu-block>
          <nu-icon
            color=":active[#special]"
            name={menuIcon ? menuIcon : 'menu-outline'}
            show="n|n|y|y"
          ></nu-icon>
        </nu-block>

        <nu-inputgroup>
          <nu-icon name="search" width="2.5em" color></nu-icon>
          <nu-input border="0" placeholder={placeholder}></nu-input>
        </nu-inputgroup>

        <nu-block responsive="766px|318px">
          <nu-grid columns="1fr" items="end">
            <nu-block>
              <nu-icon text="middle" name="person" size="3x" padding></nu-icon>
              <nu-el text="middle bold" show="y|n">
                {username}
              </nu-el>
            </nu-block>
          </nu-grid>
        </nu-block>
      </nu-grid>
    </nu-block>
  );
}

TopBar.propTypes = {};

export default TopBar;
