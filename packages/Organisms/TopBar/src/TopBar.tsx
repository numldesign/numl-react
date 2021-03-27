import React from 'react';
import { ForunIcon } from './ForunIcon';

function TopBar(props) {
  /** working on this */
  let {
    placeholder,
    nuLinkAction,
    logo,
    username,
    menuIcon,
    children,
    ...otherprops
  } = props;
  return (
    <nu-block fill="#base" padding responsive="1337px|1024px|767px|320px">
      <nu-grid
        gap="36x|24px|8px|8px"
        columns="1fr 5fr 1fr|1fr 4fr 1fr|auto 2fr auto|auto 2fr auto"
        content="stretch space-around"
      >
        <nu-block>
          <nu-block to={nuLinkAction} show="y|y|n|n" space="right center">
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
        <nu-block responsive="769px|768px" space="center">
          <nu-grid columns="1fr|1fr" items="end">
            <nu-block>
              <nu-icon text="middle" name="person" size="3x" padding></nu-icon>
              <nu-el text="middle" show="y|n">
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
